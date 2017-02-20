# MMM-NoteTaker

This is a module for the [MagicMirror](https://github.com/MichMich/MagicMirror). It is a companion module for the Alexa skill [Note Taker](https://github.com/joanaz/AS-NoteTaker), which takes notes for you and store them in DynamoDB. This mirror module retrieves the notes from DynamoDB and displays them. To use this mirror module, you have to setup the Alexa skill first. Follow the instructions in the [repo](https://github.com/joanaz/AS-NoteTaker) to setup the Alexa skill. 


## Dependencies

- [aws-sdk](https://github.com/aws/aws-sdk-js) (installed via `npm install`)

The AWS SDK uses your AWS access key to retrieve data from your DynamoDB. If you don't have one, go to the [AWS management console](https://console.aws.amazon.com/iam/home?region=us-east-1#/security_credential), and find __My Sercurity Credentials__ by clicking on your name. Then click on __+ Access Keys__, then click on the blue button that says __Create New Access Key__. 

When you have your __Access Key ID__ and __Secret Access Key__, open a terminal, navigate to this module folder, copy sample_config.json and rename it to config.json by entering `cp sample_config.json config.json` in the command line. Then copy your __Access Key ID__ and __Secret Access Key__ and paste them in config.json.

```Javascript
// sample_config.json
{
  "accessKeyId": "YOUR ACCESS KEY ID",
  "secretAccessKey": "YOUR SECRET ACCESS KEY",
  "region": "us-east-1"
}
```


## Configuration

The entry in your Magic Mirror config.js can look like the following. 

You have to retrieve your Alexa User ID from the Alexa skill Note Taker, by asking the skill "what's my user ID?". Then your Alexa user ID will be displayed on your Alexa companion mobile app. Copy and paste your Alexa user ID to your config.js entry.

```Javascript
{
    module: 'MMM-NoteTaker',
    position: "middle_center",
    config: {
        'alexaUserId': "YOUR ALEXA USER ID"
    }
}
```

