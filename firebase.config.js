
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCA4awetTerTfYkLTvHvNm35LwYya0TiR0",
  authDomain: "chattappprac.firebaseapp.com",
  projectId: "chattappprac",
  storageBucket: "chattappprac.firebasestorage.app",
  messagingSenderId: "882125917665",
  appId: "1:882125917665:web:6b36698db524dbcc7456a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;