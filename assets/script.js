const APIKey = "366d8630062f3d02a6b4a52f0ab43452";
const weatherSiteURL = "https://api.openweathermap.org";


//search bar//
let searchForm = $("#search-form");
let searchInput = $("#search-input");


function fetchLocation(search) {
    let queryURL = `${weatherSiteURL}/geo/1.0/direct?q=${search}&limit=5&appid=${APIKey}`;
    console.log("queryURL");

    // "/data/3.0/onecall/day_summary?lat=" + lat + "&lon=" + lon + "&date=" + date + "&appid=" + APIKey

    fetch(queryURL).then(function (data) {
      return data.json()
    }).then(function (response) {
        if(!response[0]){
            alert("No location found")
        } else {
            let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

            $("#history").empty();
        
            for (let i=0; i<searchHistory.length; i++){
                let historyBtn = $("<button>");
                // historyBtn.addClass("previousSearch");
                historyBtn.attr(searchHistory[i]);
                $(".list-group").append(historyBtn);
        
                $("#history").append(`<button class="list-group-item" id="${i}">${searchHistory[i]}</button>`);
            }
        
        }
      console.log(response);
    })
}

function submitSearchForm(event) {
    event.preventDefault();

    let search = searchInput.val().trim();

    fetchLocation(search);
}

//

// let lat = ();
// let lon = ();
// let date1 = dayjs().format("DD MM YY");

