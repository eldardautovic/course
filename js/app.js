var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .typeString(
    `We need You on very important mission In order to complete your
          mission BEST as possible you will need a
          <a href="#">Survival Guide</a>. And to do it in time, here is Your
          <a href="#">Agenda</a>.`
  )
  .start();

// Set the date we're counting down to
var countDownDate = new Date("May 9, 2022 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var months = Math.floor(days / 30);
  var weeks = Math.floor(days / 7);
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("months").innerHTML = months;
  document.getElementById("weeks").innerHTML = weeks;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdowner").innerHTML = "EXPIRED";
  }
}, 1000);
