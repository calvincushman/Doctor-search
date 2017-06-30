var user_key = require('./../.env').apikey;
var city = require()

function Doctor () {
}

Doctor.prototype.getDoctor = function() {
  console.log("Hi! I'm a doctor");
};



$.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ city +'&user_key=' + user_key, function(response) {
  console.log(response);
});

exports.doctorModule = Doctor;
