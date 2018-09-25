



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

        $("#gifPlace").empty();

    var results = response.data;

    for (i = 0; i < results.length; i++) {

        
        var dataStill = results[i].images.fixed_height_still.url;
        var dataMoving = results[i].images.fixed_height.url;
        var smallVideo = $("<img>").attr("src", dataStill).addClass("gif").attr("data-still", dataStill).attr("data-moving", dataMoving).attr("data-state", "still");
        var newDivs = $("<div>");
        newDivs.append(smallVideo);
        $("#gifPlace").prepend(newDivs);

       
      

        };
 
        $(".gif").on("click", function() {
            
            var state = $(this).attr("data-state");

            if (state === "still") {
                $(this).attr("src", $(this).attr("data-moving"));
                $(this).attr("data-state", "moving")
            }
    
            else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            };
        });

    }); 

});
    






$(".search").on("click", function() {

    
    var input = ":input"
    var newUrl = "";
    var newUrl = baseUrl + input + "&api_key=" + apiKey + "&limit=10";
    var newVideo = $("<img>");
    newVideo.attr("src", results[i].images.fixed_height_still.url);
    newVideo.addClass(".gif");
    ("#forButtons").append("<button>");
    $(this).closest('form').find("input[type=text], textarea").val("");
    
});