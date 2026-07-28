import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
    getAuth,
    setPersistence,
    browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAEwmfoYa_VmnOQ9ueyZ5Tk8CJVmxDEV2w",
  authDomain: "petpawth2026.firebaseapp.com",
  projectId: "petpawth2026",
  storageBucket: "petpawth2026.firebasestorage.app",
  messagingSenderId: "585605372616",
  appId: "1:585605372616:web:a36fdca28268414456e3fd"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

await setPersistence(auth, browserLocalPersistence);

const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };