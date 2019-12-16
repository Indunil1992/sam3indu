let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    debugger;
    ddb.get({
        TableName: 'testIndu',
        Key: { 'test': '10' }
    }).promise()
        .then((data) => {
            console.log("dataaaaa");

            //your logic goes here
        })
        .catch((err) => {
            console.log("errrrrrr");

            //handle error
        });

    callback(null, { "message": "Successfully executed" });
}