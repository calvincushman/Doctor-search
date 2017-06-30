var user_key = require('./../.env').apikey;


$(document).ready(function() {
  $('#doctor-location').click(function() {
    var city  = $('#location').val();
    $('#location').val("");
    $('.showDoctors').text("Finding doctors in " + city + ".");
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ city +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&apikey=' + user_key, function(response) {
      console.log(response);
    });
  });
});
