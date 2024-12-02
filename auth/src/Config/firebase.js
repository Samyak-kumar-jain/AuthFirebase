import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBJICXXMud8s7fThoff42tI3lPaKQOlGEM",
  authDomain: "authentication-7bd16.firebaseapp.com",
  projectId: "authentication-7bd16",
  storageBucket: "authentication-7bd16.firebasestorage.app",
  messagingSenderId: "1035687052917",
  appId: "1:1035687052917:web:a7d25bc6a7519a99a31a3c",
  measurementId: "G-1THKRYF864"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();``