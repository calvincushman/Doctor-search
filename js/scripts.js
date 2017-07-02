var user_key = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(city, displayDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ city +'&user_key=' + user_key)
  .then(function(response) {
    console.log(response);
    displayDoctor(city, response.data["0"].profile.first_name + " " + response.data["0"].profile.last_name, response.data["0"].profile.bio);
  }).fail(function(error) {
    $('.showDoctor').text(error.responseJSON.message);
  })
}

exports.doctorModule = Doctor;

// displayDoctor(response.data["0"].profile.first_name + " " + response.data["0"].profile.last_name);
// displayDoctor(response.data["0"].profile.bio);
