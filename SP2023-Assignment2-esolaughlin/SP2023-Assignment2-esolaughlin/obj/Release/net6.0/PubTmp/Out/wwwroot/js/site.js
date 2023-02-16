console.log("Here")

var len;
var results = '';
var today = new Date();

function apiSearch() {
    //debugger;
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "44212b496dff4ec481617cea2eb49599");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            for (i = 0; i < len; i++) {
                results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
            }
            //debugger
            $('#searchResults').html(results);
            $('#searchResults').css("visibility", "visible")
            document.getElementById("searchResults").innerHTML = results
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert("error");
        });
}

$("#searchBtn").click(function () { 
    apiSearch();
});

//$("#titleText").click(function () {
 //   changeBackground();
//});

//function changeBackground(){

//}

//jQuery(document).ready(function () {
 //   $("titleText").on("click", "#titleText", function () {
   //     $('body').css("background-color", "#9683ec");
    //});
//});

function getCurrentTimestamp() {
    var time = today.getHours() + ":" + today.getMinutes()
    console.log(time)
    results += `
                <div id="dialog" title="Current Time!">
                <p>` + time + `</p>`         

    $('#time').html(results);
    $('#time').css("visibility", "visible")
    document.getElementById("time").innerHTML = time
    $('#time').dialog();
}

$("#timeBtn").click(function () {
    getCurrentTimestamp();
});



function taskCheck() {
    document.body.style.backgroundImage = "url(../frankie-lopez-O_zyQTY1Qs0-unsplash.jpg)";
    document.body.style.backgroundSize = "2000px 1500px"
}