var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 40,
});

typewriter
  .typeString(
    `We need You on very important mission In order to complete your
          mission BEST as possible you will need a
          <a href="./downloads/Survival-guide.pdf" download="survival-guide">Survival Guide</a>. And to do it in time, here is Your
          <a href="#">Agenda</a>.`
  )
  .start();

var countDownDate = new Date("May 9, 2022 08:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var weeks = Math.floor(days / 7);
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("weeks").innerHTML = weeks;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("days").innerHTML = days;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdowner").innerHTML = "EXPIRED";
  }
}, 1000);
