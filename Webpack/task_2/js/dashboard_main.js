import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$(document).ready(function() {
  // Add elements to the page
  $('body').append('<div id="logo"></div>');
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button><span id="count"></span>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Counter functionality
  let count = 0;
  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  // Bind debounced click handler
  $('button').on('click', _.debounce(updateCounter, 300));
});