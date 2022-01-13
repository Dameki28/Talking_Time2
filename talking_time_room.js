const firebaseConfig = {
    apiKey: "AIzaSyBX6jvIANFxvSlVzoKoF_0jfKCLmjyB2n0",
    authDomain: "talking-time-cf1b2.firebaseapp.com",
    projectId: "talking-time-cf1b2",
    storageBucket: "talking-time-cf1b2.appspot.com",
    messagingSenderId: "101930838801",
    appId: "1:101930838801:web:61936e3863d4d5223afab0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();      
function logout() {
      localStorage.removeItem("username")
      window.location = "talking_time.html"
}