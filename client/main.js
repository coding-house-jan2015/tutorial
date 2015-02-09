'use strict';

$(document).ready(init);

function init() {
  $('#add').click(add);
}

function add() {
  var sum = $('#nums').val().split(',')
  .map(function(letter) {
    var num = parseInt(letter);
    var $li = $('<li>');
    $li.text(num);

    if (num % 2) {
      $('#odds').append($li);
    } else {
      $('#evens').append($li);
    }

    return num;
  }).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);

  $('#sum').text(sum);

  var oddsum = total('#odds li');
  var evensum = total('#evens li');

  $('#oddsum').text(oddsum);
  $('#evensum').text(evensum);
}

function total(selector) {
  return $(selector)
  .map(function(index, element) {
    return parseInt(element.textContent);
  }).toArray()
  .reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}
