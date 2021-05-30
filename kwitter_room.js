var firebaseConfig = {
      apiKey: "AIzaSyCwPevFNY607s07qt0um6D6Kkzl4I58yYY",
      authDomain: "twitter-8e301.firebaseapp.com",
      databaseURL: "https://twitter-8e301-default-rtdb.firebaseio.com",
      projectId: "twitter-8e301",
      storageBucket: "twitter-8e301.appspot.com",
      messagingSenderId: "198415823239",
      appId: "1:198415823239:web:38dd47c1bed327c696a322",
      measurementId: "G-F4PDQM6TQF"
    };
    firebase.initializeApp(firebaseConfig); 
    function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
    });
    localStorage.setItem("room_name",room_name);

window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names); 
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}