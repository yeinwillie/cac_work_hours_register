import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

  // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCNNYSoOTcg6o1l_vPGznDiAyQWX2fsLUQ",
      authDomain: "wh-cac.firebaseapp.com",
      projectId: "wh-cac",
      storageBucket: "wh-cac.appspot.com",
      messagingSenderId: "372835495188",
      appId: "1:372835495188:web:81a58cb0d7a4c5ba5e2601"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

  