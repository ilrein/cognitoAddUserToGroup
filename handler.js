const AWS = require('aws-sdk');

const cognito = new AWS.CognitoIdentityServiceProvider();

export const setadmin = (event, context, callback) => {
  const params = {
    GroupName: 'ADMIN',
    Username: event.userName,
    UserPoolId: event.userPoolId,
  };

  cognito.adminAddUserToGroup(params, (err, data) => {
    if (err) {
      callback(err)
    }

    callback(null, event);
  });
};
