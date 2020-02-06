const functions = require("firebase-functions");
const {
  getAllScreams,
  postOneScream,
  commentOnScream,
  likeScream,
  deleteScream,
  unlikeScream,
  getScream
} = require("./handlers/screams");
const { FBAuth } = require("./util/FBAuth");
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser
} = require("./handlers/users");
const express = require("express");
const app = express();

// SCREAMS

// Get all the screams
app.get("/screams", getAllScreams);
// Post one scream
app.post("/scream", FBAuth, postOneScream);
app.get("/scream/:screamId", getScream);
// TODO delete scream
app.delete("/scream/:screamId", FBAuth, deleteScream);
app.get("/scream/:screamId/like", FBAuth, likeScream);
app.get("/scream/:screamId/unlike", FBAuth, unlikeScream);
app.post("/scream/:screamId/comment", FBAuth, commentOnScream);

// USERS
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

exports.api = functions.region("asia-east2").https.onRequest(app);
