//ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyA0L559X7HtgVTxHRJoNRqPgPPWhf2mxqE",
    authDomain: "kwitter-project-b68ff.firebaseapp.com",
    databaseURL: "https://kwitter-project-b68ff-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-b68ff",
    storageBucket: "kwitter-project-b68ff.appspot.com",
    messagingSenderId: "456327792565",
    appId: "1:456327792565:web:a629570dfbc4d9621fbbfc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}