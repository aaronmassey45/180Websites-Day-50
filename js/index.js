  // Set the date we're counting down to
var countDownDate = new Date("Jan 7, 2018 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hr = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  hr = hr < 10 ? `0${hr}`: hr;
  min = min < 10 ? `0${min}`: min;
  sec = sec < 10 ? `0${sec}`: sec;
  document.getElementById("countdown").innerHTML = `${days}d ${hr}h ${min}m ${sec}s`;
  document.getElementById("day").innerHTML = `Today is Day ${180-days}`;

  //change background color to match hex value of hours, min, sec
  document.body.style.backgroundColor = `#${hr}${min}${sec}`

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "THE TIME HAS ARRIVED! :)";
    document.getElementById("day").innerHTML = "";
  }
}, 1000);
