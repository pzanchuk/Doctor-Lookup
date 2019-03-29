
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
import {Doctor} from "./doctor-service"

$(document).ready(function() {
  $('#searh-by-name').click(function() {
    let name = $('#name').val();
    $('#name').val("");

    let newDoctor = new Doctor();
    let promise = newDoctor.getDoctorByName(name);
    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showName').text(`Name goes here: `);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });



});
