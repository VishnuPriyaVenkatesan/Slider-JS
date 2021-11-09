$(document).ready(function ($) {

  var success = function (data) {
    loadImages(data);
  };

  var failure = function (error) {
    console.log(`Error ${error}`);
  };

  invokeListApi(success, failure);
});

function invokeListApi(success, failure) {
  $.ajax({
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
    url: 'https://picsum.photos/list',
    type: "GET",
    dataType: "json",
    success: success,
    error: failure
  });
};

function loadImages(data) {
  var x = "", i = 1;
  while (i <= 10) {
    var j = getRandomInt(0, 1000);
    var author = getAuthorName(data, j);
    if (author.length > 0) {
      i++;
      x = x + '<li><div class="author">' + author + '</div><img src="https://picsum.photos/200/300?image=' + j + '"></li>';
    }
  }
  document.getElementById("list").innerHTML = x;
  initSlider();
};

function getAuthorName(data, j) {
  var name = "";
  if (typeof (data) !== "undefined" && data !== null) {
    for (i = 0; i < data.length; i++) {
      if (data[i].id == j) {
        name = data[i].author;
        return name;
      }
    }
  }
  return name;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

function initSlider() {

  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var sliderUlWidth = slideCount * slideWidth;

  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - 15 });

  $('#slider ul li:last-child').prependTo('#slider ul');

  function moveLeft() {
    $('#slider ul').animate({
      left: + slideWidth
    }, 200, function () {
      $('#slider ul li:last-child').prependTo('#slider ul');
      $('#slider ul').css('left', '');
    });
  };

  function moveRight() {
    $('#slider ul').animate({
      left: - slideWidth
    }, 200, function () {
      $('#slider ul li:first-child').appendTo('#slider ul');
      $('#slider ul').css('left', '');
    });
  };

  $('a.control_prev').click(function () {
    moveLeft();
  });

  $('a.control_next').click(function () {
    moveRight();
  });
};
