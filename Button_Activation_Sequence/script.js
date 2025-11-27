let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let msg = document.getElementById('msg');
let helper_function = function (currentbtn,nxtbtn) {
    
    currentbtn.disabled=true;
    let prm = new Promise(function (resolve, reject) {
        setTimeout(function(){
            if(nxtbtn)nxtbtn.disabled=false;
            // nxtbtn.addEventListener('click',fun2);
            return resolve()
        },1000)
        // abhi reject ka case nahi dekhte h... phele basic flow dekte h
    })
    return prm;
}

let step3 = function(){
    helper_function(btn3,null)
    .then(function(){
        msg.innerText="All steps completed! Thank you.";
    });
}

let step2 = function(){
    helper_function(btn2,btn3)
    .then(function(){
        btn3.addEventListener('click',step3);
    });
}

let step1 = function () {
    helper_function(btn1,btn2)
    .then(function () {
        btn2.addEventListener('click',step2);
    });
}
btn1.addEventListener('click', step1);