var user_key = require('./../.env').apiKey;

$(document).ready(function() {
  $('#doctor-location').click(function() {
    var city  = $('#location').val();
    $('#location').val("");
    $('.showDoctors').text("Finding doctors in " + city + ".");
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ city +'&user_key=' + user_key, function(response) {
      console.log(response);
    });
  });
});
