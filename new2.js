

console.log("linked")
var zip ;
var key = "2c2ebda745768cdab3335ed8a1f21aef"
$("#submit").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    zip = $("#zip").val().trim();
    console.log(zip);

    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&APPID=${key}&cnt=3`;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.list)
        let forecast = response.list;
        console.log(forecast);
        for (i = 0; i < 3; i++) {
            // get the date
            // can we also get time? 
            let date = forecast[i].dt;
            // convert the date to a more readable time.
            date = moment.unix(date).toDate();
            let convertedDate = moment(date).format("h:mm A")
            // get the temperature
            let temperature = forecast[i].main.temp;
            // get the weather description
            let description = forecast[i].weather[0].description;
            //get main for percipitaion 
            let main = forecast[i].weather[0].main;
            // console log the results
            console.log(convertedDate);
            console.log(`Temperature (F): ${Math.floor(temperature)}`)
            console.log(description);
            // display results into the table
            $("#weatherTable").append(
                `<tr>
$(document).ready(function () {
    console.log("linked")
    var zip;
    var key = "2c2ebda745768cdab3335ed8a1f21aef"
    $("#submit").on("click", function (event) {
        event.preventDefault();
        console.log("clicked");
        zip = $("#zip").val().trim();
        console.log(zip);


        var queryURL = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&APPID=${key}&cnt=3`;






        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.list)
            let forecast = response.list;
            console.log(forecast);
            for (i = 0; i < 3; i++) {
                // get the date
                // can we also get time? 
                let date = forecast[i].dt;
                // convert the date to a more readable time.
                date = moment.unix(date).toDate();
                let convertedDate = moment(date).format("h:mm A")
                // get the temperature
                let temperature = forecast[i].main.temp;
                // get the weather description
                let description = forecast[i].weather[0].description;
                //get main for percipitaion 
                let main = forecast[i].weather[0].main;
                // console log the results
                console.log(convertedDate);
                console.log(`Temperature (F): ${Math.floor(temperature)}`)
                console.log(description);
                // display results into the table
                $("#weatherTable").append(
                    `<tr>
                    <td>${convertedDate}</td>
                    <td>${Math.floor(temperature)}
                    <td>${description}</td>
                </tr>`
            );
            // clear the zip
            $("#zip").val("").focus();
        
        }
        temp = forecast[0].main.temp;
        main = forecast[0].weather[0].main;
        console.log(temp);
        console.log(main);

        //depending on conditions run good or bad weather function

    //need to break the loop if 
    //what if we made an avg temp variable and a description array to check?

          if (temp < "50" || main == "Rain" || main == "Snow" || main == "Thunderstorm" || main == "Drizzle") {
                badWeather();
                );
                // clear the zip
                $("#zip").val("").focus();

            } else {
                goodWeather();
            }
    })
})
            temp = forecast[0].main.temp;
            main = forecast[0].weather[0].main;
            console.log(temp);
            console.log(main);

            //depending on conditions run good or bad weather function

            //need to break the loop if 
            //what if we made an avg temp variable and a description array to check?

function badWeather(){
    console.log("bad...")
    // generate activity buttons
}
            if (temp < "50" || main == "Rain" || main == "Snow" || main == "Thunderstorm" || main == "Drizzle") {
                badWeather();

            } else {
                goodWeather(zip);
            }
        })

    })

})

//convert to F
//--display weather
//take in degree, weather.description to determine good or bad weather 