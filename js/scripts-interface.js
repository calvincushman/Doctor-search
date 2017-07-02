var Doctor = require('./../js/scripts.js').doctorModule;

var displayDoctor = function(city, doctorName, doctorBio, phone) {
  $('.showCity').text("doctors in " + city + ".")
  $('.showName').text(doctorName)
  $('.showBio').text(doctorBio)
  $('.phoneShow').text(phone);
}

$(function() {
  var currentDoctorObject = new Doctor();
  $('#doctor-location').click(function() {
    var city  = $('#location').val();
    $('#location').val("");
    currentDoctorObject.getDoctor(city, displayDoctor);
  });
});
