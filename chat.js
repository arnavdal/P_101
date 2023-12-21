// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDkM1d-VhE2J_rVfgOaaJk9W4_Zyltd8TM",
    authDomain: "project101-9d2a0.firebaseapp.com",
    projectId: "project101-9d2a0",
    storageBucket: "project101-9d2a0.appspot.com",
    messagingSenderId: "330467893712",
    appId: "1:330467893712:web:2e67db19b3fabe9912d9d5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



