let APIKey = "366d8630062f3d02a6b4a52f0ab43452";

let queryURL = "https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=" + lat + "&lon=" + lon + "&date=" + date + "&appid=" + APIKey

//search history//
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

let lat = ();
let lon = ();
let date = ();

//function to create saved search list//

function renderButtons() {
    $("#history").empty();

}