let crl = document.getElementById("circle");
let btn = document.getElementById("btn");
let timer = document.getElementById("timer");
let color_change = function (msg, time) {
    let prm = new Promise((resolve, reject) => {
        let seconds = time / 1000;
        let interval_id = setInterval(() => {
            timer.innerHTML = seconds;
            seconds -= 1;
            if (seconds < 0) {
                clearInterval(interval_id);
            }
        }, 1000);
        crl.style.backgroundColor = msg;
        setTimeout(function () {
            resolve();
        }, time)

    })
    return prm;
}
let fun = function () {
    btn.disabled = true;
    color_change("green", 6000)
        .then(function () {
            return color_change("Yellow", 2000);
        })
        .then(function () {
            return color_change("Red", 6000);
        })
        .then(function () {
            timer.innerText = "Cycle complete";
            btn.disabled = false;
        })
        .catch(function () {
            console.log(`Something went worng`)
        })
}
btn.addEventListener('click', fun);