$(document).ready(function () {
    $(".burger").click(function () {
      $(".nav_list").toggleClass("open");
      $(".burger").toggleClass("open");
    });
  });