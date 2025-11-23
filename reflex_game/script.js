let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let srt = document.getElementById('start');
let time = 30;
let score = 0;
let greenInterval=null;
let gameTimer = null;

let clickHandler = function () {
    score += 1;
    this.style.backgroundColor = "grey";
    this.removeEventListener("click", clickHandler);
}

let game = function () {
    // PEHLA RANDOM CELL SELECT KARO
    let randomIndex = Math.floor(Math.random() * arr.length);  // 0-8
    let randomCellId = arr[randomIndex];  //1-9;
    let cell_id = document.getElementById(randomCellId);
    cell_id.style.backgroundColor = "green";
    setTimeout(() => {
        cell_id.style.backgroundColor = "grey";
        cell_id.removeEventListener('click', clickHandler)
    }, 1000);

    cell_id.addEventListener('click', clickHandler);
}

let starting = function () {
    
    srt.disabled = true;
    let count = function () {
        time -= 1;
        if (time === 0) {
            clearInterval(gameTimer);
            clearInterval(greenInterval);
            srt.disabled = false;
            alert("Game Over! Your score is: " + score);
            // resetting the game
            time = 30;
            score = 0;
            for (let i = 1; i <= 9; i++) {
                let cell = document.getElementById(i);
                cell.style.backgroundColor = "grey";
                cell.removeEventListener('click', clickHandler);
            }
            return;
        }
    }
    gameTimer = setInterval(count, 1000)
    greenInterval = setInterval(game, 2000);
}
srt.addEventListener('click', starting);



