// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCY_pxiGHhgv7yxVxmmbuEtuan-RrXA8Xw",

  authDomain: "task-manager-6f371.firebaseapp.com",

  projectId: "task-manager-6f371",

  storageBucket: "task-manager-6f371.appspot.com",

  messagingSenderId: "271307836964",

  appId: "1:271307836964:web:eea7fa05d80eefe56552b1",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
