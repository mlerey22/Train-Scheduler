
//function goodWeather() {
function goodWeather(zip) {
    console.log("The file is linked.")
var zip;
var lng;
var lat;
var key = "AIzaSyDaYhBygIiyYUEu9oWv-iE86pu_YzrtqsQ";
var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=" + key;
var queryURL2 = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lng + "&maxDistance=50&key=200673425-58529fa038b4b328e30d69f2afdf1905";
//when the zip is submitted gwt necessary info for good weather display
$("#submit").on("click", function(event) {
    event.preventDefault();
    var lng;
    var lat;
    var FUkey = "AIzaSyDaYhBygIiyYUEu9oWv-iE86pu_YzrtqsQ";
    var queryURL2 = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lng + "&maxDistance=50&key=200673425-58529fa038b4b328e30d69f2afdf1905";
    //when the zip is submitted gwt necessary info for good weather display

    console.log("clicked");
   zip = $("#zip").val().trim();
   console.log(zip);
    console.log(zip);
    $("#generatehere").html('<div class="accordion" id="list"><h3>Trails</h3><div id="trails"></div><h3>Campgrounds and Parks</h3><div id="campgrounds"></div></div>');
    $(function () {
        $(".accordion").accordion()
    });


   var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=" + key;

   //call google geocode api to convert zip to long and lat
$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response); 
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=" + FUkey;
    console.log(queryURL)
    //call google geocode api to convert zip to long and lat
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.results[0].geometry.location.lat);
        lat = response.results[0].geometry.location.lat;
        lng = response.results[0].geometry.location.lng;
         

        lat = lat.toString();
        lng = lng.toString();
        //use lat and long from google api in the hiking url for campgrounds and trails
                queryURL2 = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lng + "&maxDistance=50&key=200673425-58529fa038b4b328e30d69f2afdf1905";
               
                queryURL3 = "https://www.hikingproject.com/data/get-campgrounds?lat=" + lat + "&lon=" + lng + "&maxDistance=50&key=200673425-58529fa038b4b328e30d69f2afdf1905";
        queryURL2 = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lng + "&maxDistance=50&key=200673425-58529fa038b4b328e30d69f2afdf1905";

        queryURL3 = "https://www.hikingproject.com/data/get-campgrounds?lat=" + lat + "&lon=" + lng + "&maxDistance=50&key=200673425-58529fa038b4b328e30d69f2afdf1905";
        //call hiking api to get hiking trails 
        $.ajax({
            url: queryURL2,
            method: "GET"
          }).then(function(response) {
                console.log(response);
                let trailsArray = response.trails;
                trailsArray.forEach(list => {
                  let trailCard = $("<div>").addClass("card");
                  let trailName = list.name;
                  console.log(trailName);
                  let trailSummary = list.summary;
                  console.log(trailSummary);
                  let trailDifficulty = list.difficulty;
                  console.log(trailDifficulty);
                  let trailLocal = list.location;
                  console.log(trailLocal);
                  let trailURL = list.url;
                  console.log(trailURL);
                  // create paragraphs for each variable
                  let trailP = $("<p>").text(trailName);
                  let summaryP = $("<p>").text("Summary: " + trailSummary);
                  let difficultyP = $("<p>").text("Difficulty: " + trailDifficulty);
                  let locationP = $("<p>").text("Location: " + trailLocal);
                  let urlP = $("<a>").attr("href", trailURL).text("Check out the full site here!");
                  // append each to trailCard
                  trailCard.append(trailP, summaryP, difficultyP, locationP, urlP);
                  $("#trails").append(trailCard);
                })
            
                 })

       // call campground api
       $.ajax({
        url: queryURL3,
        method: "GET"
      }).then(function(response) {
        }).then(function (response) {
            console.log(response);
            let trailsArray = response.trails;
            trailsArray.forEach(list => {
                let trailCard = $("<p>").addClass("card");
                let trailName = list.name;
                console.log(trailName);
                let trailSummary = list.summary;
                console.log(trailSummary);
                let trailDifficulty = list.difficulty;
                console.log(trailDifficulty);
                let trailLocal = list.location;
                console.log(trailLocal);
                let trailURL = list.url;
                console.log(trailURL);
                // create paragraphs for each variable
                let trailP = $("<p>").text(trailName);
                let summaryP = $("<p>").text("Summary: " + trailSummary);
                let difficultyP = $("<p>").text("Difficulty: " + trailDifficulty);
                let locationP = $("<p>").text("Location: " + trailLocal);
                let urlP = $("<a>").attr("href", trailURL).text("Check out the full site here!");
                // append each to trailCard
                trailCard.append(trailP, summaryP, difficultyP, locationP, urlP);
                $("#trails").append(trailCard);
            })
            $("#list").accordion("refresh");

        })

        // call campground api
        $.ajax({
            url: queryURL3,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            let campgroundsArray = response.campgrounds;
            campgroundsArray.forEach(list => {

                let cgCard = $("<div>").addClass("card");
                let cgCard = $("<p>").addClass("card");
                let cgName = list.name;
                let cgLocal = list.location;
                let cgURL = list.url;
@ -87,11 +90,14 @@ $.ajax({


            })
            $("#list").accordion("refresh");
        })



             })
    })
};

})})
//};
