// import firebase from "@firebase/app";
import "bootstrap/dist/css/bootstrap.css";
import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/analytics";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBej6_ybdqOeEDKK38bBwl9M4siRy_gGdw",
  authDomain: "easy-cooking-final.firebaseapp.com",
  databaseURL: "https://easy-cooking-final.firebaseio.com",
  projectId: "easy-cooking-final",
  storageBucket: "easy-cooking-final.appspot.com",
  messagingSenderId: "562770971152",
  appId: "1:562770971152:web:197abe3de3e105f7935895",
  measurementId: "G-995WSZ8XYY",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// enable firestore configuration
const db = firebase.firestore();
// firebase.firestore.setLogLevel('debug');
firebase.firestore().settings({ experimentalForceLongPolling: true });

db.collection("tests")
  .get()
  .then((snapshot) => {
    snapshot.forEach((test) => {
      console.log(test.data());
      console.log(test.id);
    });
  })
  .catch((e) => {
    console.error(e);
  });

export default firebase;
