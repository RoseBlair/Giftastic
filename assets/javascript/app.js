



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
        smallVideo.addClass(".gif data-still");
        //smallVideo.attr(dataStill, results[i].images.fixed_height_still.url);
        //smallVideo.attr(dataMoving, results[i].images.fixed_height.url)
        var newDivs = $("<div>");
        newDivs.append(smallVideo);
        $("#gifPlace").prepend(newDivs);

       
    

    var p = $("<p>").text("Rating: " + rating);
    // Storing the result item's rating
    var rating = results[i].rating;

    console.log(results);

    $(".gif").on("click", function click() {
        console.log("good job");
    });

    };

  

       
    });  


    });


    // $(smallVideo).click(function() {

    //     smallVideo.attr("src", results[i].images.fixed_height.url);
    //     newDivs.append(smallVideo);
    //     console.log(results.images.fixed_height.url);

   

   
    



    // <body>
    // <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif">
    // <img src="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-still="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-animate="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200.gif" data-state="still" class="gif">
    // <img src="https://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif" data-still="https://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif" data-animate="https://media3.giphy.com/media/W6LbnBigDe4ZG/200.gif" data-state="still" class="gif">
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    // <script type="text/javascript">
    //   $(".gif").on("click", function() {
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-state");
    //     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === "still") {
    //       $(this).attr("src", $(this).attr("data-animate"));
    //       $(this).attr("data-state", "animate");
    //     } else {
    //       $(this).attr("src", $(this).attr("data-still"));
    //       $(this).attr("data-state", "still");
    //     }
    //   });


// });