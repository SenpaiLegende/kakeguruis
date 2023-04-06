  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAAfpcxVU4gs-e6K75t9dYW67oE7Hw57E0",
    authDomain: "website-3f137.firebaseapp.com",
    projectId: "website-3f137",
    storageBucket: "website-3f137.appspot.com",
    messagingSenderId: "621191469993",
    appId: "1:621191469993:web:9a8c3969bd898d71a202b8",
    measurementId: "G-FJ6LR50793"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = fiebase.auth();

  function singUp (){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPasswort(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert ("Du bist eingeloggt!");

  }
