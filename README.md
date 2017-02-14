# MMM-NoteTaker

This is a module for the [MagicMirror](https://github.com/MichMich/MagicMirror). It is a companion module for the Alexa skill [Note Taker](https://github.com/joanaz/AS-NoteTaker), which displays the notes stored in DynamoDB by the Alexa skill.


## Dependencies

- [aws-sdk](https://github.com/aws/aws-sdk-js) (installed via `npm install`)

You have to use your AWS access key to retrieve data from your DynamoDB. If you don't have one, go to the [AWS management console](https://console.aws.amazon.com/iam/home?region=us-east-1#/security_credential), and find __My Sercurity Credentials__ by click on your name. Then click on __Access Keys__, then click on the blue button that says __Create New Access Key__. Copy your __Access Key ID__ and __Secret Access Key__, and paste them in a new file like below, and save the file as config.json in the root of this mirror module folder.

```Javascript
{
  "accessKeyId": "YOUR ACCESS KEY ID",
  "secretAccessKey": "YOUR SECRET ACCESS KEY",
  "region": "us-east-1"
}
```


## Configuration

The entry in config.js can look like the following. (NOTE: You only have to add the variables to config if want to change its standard value.)

You have to retrieve your Alexa User ID from the Alexa skill Note Taker, by asking the skill "what's my user ID?". Then your Alexa user ID will be displayed on your Alexa companion mobile app. Copy and paste your Alexa user ID in the config below.

```Javascript
{
    module: 'MMM-NoteTaker',
    position: "middle_center",
    config: {
        'alexaUserId': "YOUR ALEXA USER ID"
    }
}
```

