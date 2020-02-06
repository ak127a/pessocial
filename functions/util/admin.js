const admin = require("firebase-admin");
const serviceAccount = require("../key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "pessocial-a007f.appspot.com"
});

const db = admin.firestore();

module.exports = { admin, db };
