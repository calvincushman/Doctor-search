// var user_key = ('./../.env').apikey;
//
// var Doctor = function() {
//   this.
// };
//
// // //business logic stuff for a particular module
// // var ExampleModule = function(args) {
// //   this.args = args; //to be replaced with constructor arguments
// // };
// //
// // ExampleModule.prototype.examplePrototype = function() {
// //   console.log(user_key);
// //   return `this is an example prototype method`;
// // };
// //
// // exports.exampleModule = ExampleModule;
//
// Doctor.prototype.getDoctors = function(callback) {
//   var state = this;
//   $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&apikey=${apiKey}&output=json`)
//     .then(function(resp) {
//       var docObj = JSON.parse(resp).response.doctor;
//       callback(docObj);
//       console.log(docObj);
//     })
//     .fail(function(error) {
//       console.log(error);
//     });
// };
