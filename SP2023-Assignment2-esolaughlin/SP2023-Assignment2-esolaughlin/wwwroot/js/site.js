console.log("Here")

var len;
var results = '';

function apiSearch() {
    debugger;
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
            debugger
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


