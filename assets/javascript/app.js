



var funnyPeople = ["steve martin", "tina fey", "simon pegg", "john cleese", "leslie jones",
"gene wilder", "maria bamford", "ricky gervais", "jerry stiller", "larry david", "charlie chaplin",
"allie wong", "issa rae", "aisha tyler", "colin mochrie", "tracy morgan", "randall park", 
"keiko agena", "buster keaton", "faizon love", "joel hodgson"];


var baseUrl = "http://api.giphy.com/v1/gifs/search?q=";

var apiKey = "c8oLIYBQM3lhMfDfkMfIP74UpD7SJjiN"; 
                



$("button").on("click", function() {

    var funny = $(this).attr("data-funny");

    var giphyUrl = baseUrl + funny + "&api_key=" + apiKey + "&limit=10";

    $.ajax({
        url: giphyUrl,
        method: "GET"
    })

    .then(function(response) {

    var results = response.data;

    for (i = 0; i < results.length; i++) {

        
        var dataStill;
        var smallVideo = $("<img>");
        smallVideo.attr("src", results[i].images.fixed_height_still.url);
        smallVideo.addClass(".gif");
        var newDivs = $("<div>");
        newDivs.append(smallVideo);
        $("#gifPlace").prepend(newDivs);

       
        var p = $("<p>").text("Rating: " + rating);
        // Storing the result item's rating
        var rating = results[i].rating;

        console.log(results);

        };
 
    }); 

});
    


$(".gif").on("click", function() {
    
    console.log("good job");
    
    if ("src" === results[i].images.fixed_height_still.url) {
        (".gif").attr("src", results[i].images.fixed_height_still.url);
    }

    else if ("src" === results[i].images.fixed_height.url) {
        (".gif").attr("src", results[i].images.fixed_height.url);
    };
});



$(".search").on("click", function() {

    var input = ":input"
    var newUrl = "";
    var newUrl = baseUrl + input + "&api_key=" + apiKey + "&limit=10";
    console.log(newUrl);
    ("#forButtons").append("<button>");
    $(this).closest('form').find("input[type=text], textarea").val("");
    
});