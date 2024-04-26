import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBaUJNVFXV_SKLH0nqz1vt75U-PHUv0QN4",
    authDomain: "restaurantapp-13b6d.firebaseapp.com",
    databaseURL: "https://restaurantapp-13b6d-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-13b6d",
    storageBucket: "restaurantapp-13b6d.appspot.com",
    messagingSenderId: "56021241964",
    appId: "1:56021241964:web:30420ac58e8a2093524849"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

