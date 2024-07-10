import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyApiKVyIvVmxG-Jb1FUXCF5qYGcEeEEJwY",
  authDomain: "react-notes-343fd.firebaseapp.com",
  projectId: "react-notes-343fd",
  storageBucket: "react-notes-343fd.appspot.com",
  messagingSenderId: "846664500925",
  appId: "1:846664500925:web:996919a377ed579ca659d4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
