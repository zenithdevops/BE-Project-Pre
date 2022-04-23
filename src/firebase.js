import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBDEfR8Py2ZWAhgwKAstxwbqgliDdNMnb0",
    authDomain: "medical-image-analysis-3b7c9.firebaseapp.com",
    projectId: "medical-image-analysis-3b7c9",
    storageBucket: "medical-image-analysis-3b7c9.appspot.com",
    messagingSenderId: "439462919043",
    appId: "1:439462919043:web:77e633ee3094c297a154b6",
    measurementId: "G-T37ZRQX8R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app, "gs://medical-image-analysis-3b7c9.appspot.com");