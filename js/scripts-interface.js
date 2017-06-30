var Doctor = require('./../js/scripts.js').doctorModule;

$(function() {
  var currentDoctorObject = new Doctor();
  $('#doctor-location').click(function() {
      var city  = $('#location').val();
      $('#location').val("");
      $('.showDoctors').text("Finding doctors in " + city + ".");
    });
  });
});


currentDoctorObject.getDoctor();
