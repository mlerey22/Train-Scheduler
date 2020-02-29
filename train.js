var firebaseConfig = {
    apiKey: "AIzaSyDH1OOqH4gkfahFsAdIwDJ8sIGA5_w6Ot4",
    authDomain: "train-30514.firebaseapp.com",
    databaseURL: "https://train-30514.firebaseio.com",
    projectId: "train-30514",
    storageBucket: "train-30514.appspot.com",
    messagingSenderId: "620243459056",
    appId: "1:620243459056:web:8100d6837e443025abdb35"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


let database = firebase.database();
$("#submit").on("click", function(event) {
    event.preventDefault();

var time = $("#time").val();
var timeSplit = time.split(":");
console.log(time);
console.log(timeSplit);

var name = $("#name").val().trim();
var destination = $("#destination").val().trim();
var frequency = $("#frequency").val();

console.log(time, name, destination, frequency);
 //save data to firebase
 database.ref().push({
    name: name,
    destination: destination,
    frequency: frequency,
    time: time
})
// clear the inboxes
$("#name").val("").focus();
$("#date").val("")
$("#role").val("")
$("#rate").val("")


})

fdatabase.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
    



    //$("#tableBody").append(`<tr><td>${snapshot.val().name}</td><td>${snapshot.val().destination}</td><td>${snapshot.val().frequency}</td><td>${months}</td><td>${snapshot.val().rate}</td><td>${billed}</td></tr>`);
})