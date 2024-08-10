import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDCqtf1SyDKmeFIdduXwa5UHWlZck6qd10",
  authDomain: "legaspi-dental-clinic-fa831.firebaseapp.com",
  projectId: "legaspi-dental-clinic-fa831",
  storageBucket: "legaspi-dental-clinic-fa831.appspot.com",
  messagingSenderId: "848241750675",
  appId: "1:848241750675:web:604b479fdcc38b30b5d366",
  measurementId: "G-CRP27S7E8Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);