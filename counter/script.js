let counter = document.getElementById('counter');
let Start = document.getElementById('Start');
let Pause = document.getElementById('Pause');
let Reset = document.getElementById('Reset');
let value = 0;
let interval_id = null;

// ------- start button ka logic -----------
let Start_fun = function () {
  let start = this;

  start.disabled = true;
  Pause.disabled = false;
  Reset.disabled = false;
  let counter_start = function () {
    value += 1;
    counter.innerText = value;
  }
  interval_id = setInterval(counter_start, 1000);
}
Start.addEventListener('click', Start_fun);

// ------- Pause/Resume button ka logic -------
let Pause_fun = function () {
  let pause = this;
  if (interval_id !== null) {
    pause.innerText = "Resume"
    clearInterval(interval_id);
    interval_id=null;
  }
  else {
    pause.innerText = "Pause";
    let counter_start = function () {
      value += 1;
      counter.innerText = value;
    }
    interval_id = setInterval(counter_start, 1000);

  }
}
Pause.addEventListener('click', Pause_fun)

// ------- Restart button ka logic -------
let reset_fun=function(){
  let reset=this;
  Start.disabled=false;
  Pause.innerText="Pause"
  Pause.disabled=true;
  reset.disabled=true;
  counter.innerText=0;
  value=0;
  clearInterval(interval_id);
  interval_id=null;
}
Reset.addEventListener('click',reset_fun);