import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBLvlRVr8MHZb0T3JyQ67CyBQWxGXu0ymc",
  authDomain: "catch-of-the-day-c8d39.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-c8d39.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
