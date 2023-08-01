$(document).ready(function () {
    $(".burger").click(function () {
      $(".nav_list").toggleClass("open");
      $(".burger").toggleClass("open");
    });
  });


const accordionTriggers = document.querySelectorAll('.accordion_trigger');

accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        trigger.parentElement.classList.toggle('active');
    });
});