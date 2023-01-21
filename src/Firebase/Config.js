import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBBUNeRUd-c36Uk1C7_xfF01H27wZjJyoI",
    authDomain: "jwel-3ceff.firebaseapp.com",
    projectId: "jwel-3ceff",
    storageBucket: "jwel-3ceff.appspot.com",
    messagingSenderId: "1059974680826",
    appId: "1:1059974680826:web:c8408ae435e6cc24be3943",
    measurementId: "G-855X8BCQMW"
  };

  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);