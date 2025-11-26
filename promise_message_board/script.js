let btn = document.getElementById('btn');
let area= document.getElementById('msgarea');
let helper_function=function(){
    let prm=new Promise(function(res,rej){
        let num=Math.random();
        setTimeout(function(){
            if(num>0.5)
            {
                res("Message loaded successfully!")
            }
            else{
                rej("Something went wrong!")
            }
        },1000)
    })
    return prm;
}
let val = function(){
    btn.disabled=true;
    area.innerHTML="Loading message...";
    helper_function()
    .then(function(msg1){
        area.innerText=msg1
        area.style.color="green";
        btn.disabled=false;
    })
    .catch(function(msg2){
        area.innerHTML=msg2
        area.style.color="red";
        btn.disabled=false;
    })
}
btn.addEventListener('click',val);