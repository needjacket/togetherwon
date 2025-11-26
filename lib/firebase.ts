// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2siwsPuOK9Lm62BPPkrCXfkmk6b_NYM0",
  authDomain: "togetherwon-e709e.firebaseapp.com",
  projectId: "togetherwon-e709e",
  storageBucket: "togetherwon-e709e.firebasestorage.app",
  messagingSenderId: "224076199526",
  appId: "1:224076199526:web:999b8d60ae036b3c8d5fa7",
  measurementId: "G-40YNWWMB5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in browser environment
let analytics: ReturnType<typeof getAnalytics> | undefined;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };

