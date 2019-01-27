
// I was unable to make the add button functional. :(


$(document).ready(function() {

// array that contains values to be searched for. 

// var funnyPeople = ["steve martin", "tina fey", "simon pegg", "john cleese", "leslie jones",
// "gene wilder", "maria bamford", "ricky gervais", "jerry stiller", "larry david", "charlie chaplin",
// "allie wong", "issa rae", "aisha tyler", "colin mochrie", "tracy morgan", "randall park", 
// "keiko agena", "buster keaton", "faizon love", "joel hodgson"];

//the beginning of the API URL

var baseUrl = "https://api.giphy.com/v1/gifs/search?q=";

// The API key

var apiKey = "c8oLIYBQM3lhMfDfkMfIP74UpD7SJjiN"; 


//on click function for any button

$(document).on("click", "button", function() {

//creation of a variable that gives the clicked button the data-funny attribute. 

    var funny = $(this).attr("data-funny");

//URL that must be used to get gifs.

    var giphyUrl = baseUrl + funny + "&api_key=" + apiKey + "&limit=10";

//ajax get method

    $.ajax({
        url: giphyUrl,
        method: "GET"
    })

//upon receiving JSON data...

    .then(function(response) {

//clear the division that the gifs go into.

        $("#gifPlace").empty();

//make the JSON into an array.

    var results = response.data;

//for loop that goes through the results

    for (i = 0; i < results.length; i++) {
    
//two variables are defined as URLs: a fixed image URL and a moving image URL.

        
        var dataStill = results[i].images.fixed_height_still.url;
        var dataMoving = results[i].images.fixed_height.url;

// data-still is equal to the still image variable, and data-moving is equal to the moving image variable. 

        var smallVideo = $("<img>").attr("src", dataStill).addClass("gif").attr("data-still", dataStill).attr("data-moving", dataMoving).attr("data-state", "still");
        
//a new div is created, and the gifs are appended into the division. 
        
        var newDivs = $("<div>");
        newDivs.append(smallVideo);
        $("#gifPlace").prepend(newDivs);

       
      

        };
 
    
//when a gif is clicked...

        $(".gif").on("click", function() {


// data-state is attributed to the gif. 
            
            var state = $(this).attr("data-state");

//if data-state is still, then change data-state to moving. 

            if (state === "still") {
                $(this).attr("src", $(this).attr("data-moving"));
                $(this).attr("data-state", "moving")
            }

//if data-state is moving, then change data-state to still.
            else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            };
        });

    }); 

});
    

//This was supposed to append new buttons into the button div. Wasn't able to figure it out, 
//unfortunately.

$("#search").on("click", function() {
    event.preventDefault();
    var data = $("#input").val().trim();
    var newButton =  $("<button>").attr("data-funny", data).html(data);
    $("#forButtons").append(newButton);
   
});

});