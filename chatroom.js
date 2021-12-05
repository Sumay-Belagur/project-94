function back() {
    window.location= "index.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyDe9sgDxPTnwrGPWYfTuqK4YuI_RGR7AI8",
    authDomain: "project-94-a7aba.firebaseapp.com",
    projectId: "project-94-a7aba",
    storageBucket: "project-94-a7aba.appspot.com",
    messagingSenderId: "720869870493",
    appId: "1:720869870493:web:bb47469d775e0a4b95bd74",
    measurementId: "G-M04Y83S462"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("login_input");

document.getElementById("wlc_h3").innerHTML= "Hello " + user_name;