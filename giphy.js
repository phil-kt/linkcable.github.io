$(document).ready(function(){
    $.getJSON('http://api.giphy.com/v1/gifs/search?q=construction&limit=100&api_key=dc6zaTOxFJmzC', function (res) {
        console.log(res);
        var choice = Math.floor(Math.random()*(100+1));
        console.log(res.data[choice]);
        var gif = res.data[choice].images.original.url;
        $('#giphy').css('background-image', 'url(' + gif + ')');
    });
});