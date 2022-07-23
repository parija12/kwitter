
var firebaseConfig = {
  apiKey: "AIzaSyBzWrquV7SY-QD32_txJ6hH4meE-2B3JkE",
  authDomain: "kwitter2-30f44.firebaseapp.com",
  databaseURL: "https://kwitter2-30f44-default-rtdb.firebaseio.com",
  projectId: "kwitter2-30f44",
  storageBucket: "kwitter2-30f44.appspot.com",
  messagingSenderId: "901542334985",
  appId: "1:901542334985:web:697e306df05e66c45fded8",
  measurementId: "G-P2PC9ZF7JE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
