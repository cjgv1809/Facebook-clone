import firebase from "firebase/";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8O9G3NRp3UmdDG2JkcOuWv5PbyVydzSQ",
  authDomain: "facebook-clone-1475c.firebaseapp.com",
  projectId: "facebook-clone-1475c",
  storageBucket: "facebook-clone-1475c.appspot.com",
  messagingSenderId: "773244580219",
  appId: "1:773244580219:web:7e42f2c3bdef9a3c050dde",
  measurementId: "G-V6NYLCLM35",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
