let count = 120;
let countInterval;

var start = function () {
  countInterval = setInterval(function () {
    count--;
    if (count === 0) {
      alert("End Counter");
      Cookies.set("state", "paused");
      /*Because the reset was not fully executed as a function, 
      the onclick command was used and the reset 
      function was called inside it.*/
      onclick(reset());
    }
    Cookies.set("count", count);
    Cookies.set("state", "started");
    document.getElementById("counter").innerHTML = count;
    document.getElementsByClassName("start")[0].disabled = true;
    document.getElementsByClassName("pause")[0].disabled = false;
    document.getElementsByClassName("reset")[0].disabled = false;
  }, 1000);
};