("#submit").on("click", function(event) {
    event.preventDefault();
    
    var time = $("#train").val;
    console.log(time)
    })
    var firebaseConfig = {
        apiKey: "AIzaSyBU-QpMFASHg4mJHwCyxFxaudjjf5W5w7w",
        authDomain: "employee-info-8eea2.firebaseapp.com",
        databaseURL: "https://employee-info-8eea2.firebaseio.com",
        projectId: "employee-info-8eea2",
        storageBucket: "employee-info-8eea2.appspot.com",
        messagingSenderId: "285566552453",
        appId: "1:285566552453:web:12d36445f00934cf675cec"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    let database = firebase.database();
    
    // add employee
    $("#submit").on("click", function(event) {
        event.preventDefault();
    
        console.log("Clicked!")
        let name = $("#name").val().trim();
        console.log(name);
        let date = $("#date").val().trim();
        let role = $("#role").val().trim();
        let rate = $("#rate").val().trim();
        console.log(date, role, rate);
        //save data to firebase
        database.ref().push({
                name: name,
                role: role,
                date: date,
                rate: rate,
            })
            // clear the inboxes
        $("#name").val("").focus();
        $("#date").val("")
        $("#role").val("")
        $("#rate").val("")
    });
    
    database.ref().on("child_added", function(snapshot) {
        console.log(snapshot.val());
        console.log(snapshot.val().name);
        var employeeDate = moment(snapshot.val().date);
        var months = moment().diff(employeeDate, "months");
        console.log(employeeDate.format("MM/DD/YYYY"));
        var today = moment()
        var billed = months * (snapshot.val().rate);
    
    
    
        $("#tableBody").append(`<tr><td>${snapshot.val().name}</td><td>${snapshot.val().role}</td><td>${employeeDate.format("MM/DD/YYYY")}</td><td>${months}</td><td>${snapshot.val().rate}</td><td>${billed}</td></tr>`);
    })