// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZzPxP8HUK2ju2vKAwpKAXRF_xhEKJS-4",
  authDomain: "contact-form-6ec2a.firebaseapp.com",
  databaseURL: "https://contact-form-6ec2a-default-rtdb.firebaseio.com",
  projectId: "contact-form-6ec2a",
  storageBucket: "contact-form-6ec2a.appspot.com",
  messagingSenderId: "315359793506",
  appId: "1:315359793506:web:3c0ae23d39b23235b99c3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);