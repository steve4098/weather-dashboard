const APIKey = "366d8630062f3d02a6b4a52f0ab43452";
const weatherSiteURL = "https://api.openweathermap.org";


//search bar//
let searchInput = $("#search-input");
let searchForm = $("#search-form");


function fetchLocation(search) {
    let queryURL = weatherSiteURL + "/data/3.0/onecall/day_summary?lat=" + lat + "&lon=" + lon + "&date=" + date + "&appid=" + APIKey
}

function submitSearchForm(event) {
    event.preventDefault();

    let search = searchInput.val().trim();

    fetchLocation(search);
}

//

let lat = ();
let lon = ();
let date1 = dayjs().format("DD MM YY");

//search history//
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

//function to create saved search list local storage//

function renderButtons() {
    $("#history").empty();

    for (let i=0; i<searchHistory.length; i++){
        let historyBtn = $("<button>");
        historyBtn.addClass("previousSearch");
        historyBtn.attr(searchHistory[i]);
        $(".list-group").append(historyBtn);

        // $("#history").append(`<button class="list-group-item" id="${i}">${searchHistory[i]}</button>`);
    }

}