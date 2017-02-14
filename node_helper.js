'use strict';
const NodeHelper = require('node_helper');
const AWS = require('aws-sdk');
AWS.config.loadFromPath(__dirname + '/config.json');
var ddb = new AWS.DynamoDB()

module.exports = NodeHelper.create({
  // Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, payload) {
    if (notification === 'START_MODULE') {
      this.start_module(payload);
    }
  },
  start_module: function(payload) {
    let self = this

    var fetchDB = function() {
      ddb.query({
        TableName: 'Notes',
        KeyConditionExpression: 'userId = :uid',
        ExpressionAttributeValues: {
          ':uid': {
            "S": payload.alexaUserId
          }
        }
      }, function(err, results) {
        // send notes to mirror
        self.sendSocketNotification("RESULT", results.Items[0].mapAttr.M.notes.L);

        // do this every 5 minute to update the list
        setTimeout(fetchDB, 300000);
      })
    }

    fetchDB();
  }
});