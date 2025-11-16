let inp=document.getElementById('inp');
let btn=document.getElementById('btn');
let dv=document.getElementById('add');
let pr=document.getElementById('priority');
let st  = document.getElementById('status');  
let val = function()
{
  let b = inp.value.trim();
  let val = pr.value;
  let stt = st.value;
  if(b.length==0)return;



  let deleteit = function(){
    this.remove();
  }
  let para=document.createElement('p');
  para.addEventListener('click',deleteit); //<-- is tarike se hm paragragh me ek functionality add kr rahe h.. ki click krne pr delete ho jana
  para.innerText = `${b}  [${val}]  (${stt})`;

  dv.appendChild(para);

  inp.val="";

}
btn.addEventListener('click',val);
