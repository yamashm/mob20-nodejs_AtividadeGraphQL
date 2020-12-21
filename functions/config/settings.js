const admin = require("firebase-admin");
const serviceAccount = require("../../mob-20-yamashm-nodejs-bfbgql-firebase-adminsdk-9mwu7-159b12a141.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mob-20-yamashm-nodejs-bfbgql-default-rtdb.firebaseio.com/"
});

module.exports = admin;
