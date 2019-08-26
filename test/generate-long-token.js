/* eslint-disable no-console */


/**
 * This script generates a long lived token from a short lived one generated by
 * the facebook developer console.
 *
 * Usage: node ./generate-long-token.js shortlivedtoken
 *
 * The output will be the JSON response from facebook, copy the access_token value to
 * test/credentials.js
 */

const https = require('https');
const FBAppCredentials = require('../test/credentials.js');

const options = {
  hostname: 'graph.facebook.com',
  port: 443,
  path: `/oauth/access_token?grant_type=fb_exchange_token&client_id=${FBAppCredentials.clientID
  }&client_secret=${FBAppCredentials.clientSecret}&fb_exchange_token=${process.argv[2]}`,
  method: 'GET',
  protocol: 'https:'
};

const req = https.request(options, (res) => {
  let data = '';
  console.log(`Status Code: ${res.statusCode}`);
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
  });
});

req.end();
