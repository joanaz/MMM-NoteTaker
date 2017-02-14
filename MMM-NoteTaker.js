/* global Module */

/* Magic Mirror
 * Module: MMM-NoteTaker
 *
 * 
 * MIT Licensed.
 */

Module.register('MMM-NoteTaker', {

  defaults: {
    'alexaUserId': "YOUR ALEXA USER ID",
  },

  start: function() {
    Log.info('Starting module: ' + this.name);
    this.sendSocketNotification('START_MODULE', this.config);
  },

  getStyles: function() {
    return [
      "MMM-NoteTaker.css",
    ]
  },

  // Override socket notification handler.
  socketNotificationReceived: function(notification, payload) {
    Log.info(this.name + "received a socket notification:\n" + notification);

    if (notification === "RESULT") {
      this.result = payload;
      this.updateDom()
    }
  },

  getDom: function() {
    wrapper = document.createElement("div");
    wrapper.className = 'thin large bright';

    if (this.result) {
      let ol = document.createElement("ol")
      for (let i = 0; i < this.result.length; i++) {
        let li = document.createElement("li")
        let t = document.createTextNode(this.result[i].S)
        li.appendChild(t)
        ol.appendChild(li)
      }
      wrapper.appendChild(ol)
    }
    return wrapper;
  }
});