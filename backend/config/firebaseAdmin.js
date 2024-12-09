//Create a firebaseAdmin.js file in a config folder for initializing the Firebase Admin SDK
const admin = require("firebase-admin");

// Load Firebase Admin credentials
const serviceAccount = require("./firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = { admin };
