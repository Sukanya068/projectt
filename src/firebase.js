import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCCPBe_HogUCr-phUrF8rdk-5rDPlWb2oU",
  authDomain: "mini2-c2a2f.firebaseapp.com",
  databaseURL: "https://mini2-c2a2f.firebaseio.com",
  projectId: "mini2-c2a2f",
  storageBucket: "mini2-c2a2f.appspot.com",
  messagingSenderId: "1068289561793",
  appId: "1:1068289561793:web:a35c41de0f8f5e21127040",
  measurementId: "G-KJTNM0ZNL6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
