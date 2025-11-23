// --------------- Elements Ko Fetch Karna starts --------------------
let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let dv = document.getElementById('add');
let pr = document.getElementById('priority');
let st = document.getElementById('status');
let filter = document.getElementById('filter');
let sort = document.getElementById('sortBtn');
// --------------- Elements Ko Fetch Karna Ends -----------------------



// -------------- New task add krne ka code starts ----------------------

let val = function () {
  let b = inp.value.trim();
  let val = pr.value;
  let stt = st.value;
  if (b.length == 0) return;
  // let deleteit = function () {
  //   this.remove();
  // }
  let para = document.createElement('p');
  // para.addEventListener('click', deleteit); //<-- is tarike se hm paragragh me ek functionality add kr rahe h.. ki click krne pr delete ho jana
  para.setAttribute("data-status", stt); // <---- new attributes add karna
  para.setAttribute("data-priority", val); // <--|

  para.innerText = `${b}  [${val}]  (${stt})`;
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.addEventListener("click", function () {
    para.remove();
  });
  para.append(delBtn);

  let statusBtn = document.createElement("button");
  statusBtn.innerText = (stt === "Pending") ? "Completed" : "Pending";
  statusBtn.addEventListener("click", function (e) {
    let current = para.getAttribute("data-status");
    let newStatus = (current === "Pending") ? "Completed" : "Pending";
    para.setAttribute("data-status", newStatus);
    para.innerText = `${b}  [${val}]  (${newStatus})`;
    para.appendChild(delBtn);
    para.appendChild(statusBtn);
    statusBtn.innerText = 
    newStatus === "Pending" ? "Completed" : "Pending";
  })
  para.append(statusBtn);



  dv.appendChild(para);

  inp.value = "";

}
btn.addEventListener('click', val);

// -------------- New task add krne ka code Ends ----------------------

let choose = function (e) {
  let value = this.value;
  let para = dv.getElementsByTagName('p');
  for (let i = 0; i < para.length; i++) {
    let status = para[i].getAttribute('data-status');

    if (status === value || value === 'All') {
      para[i].style.display = 'block';
    }
    else {
      para[i].style.display = 'none';
    }

  }
}

filter.addEventListener('change', choose);



let priority = {
  "High": 1,
  "Medium": 2,
  "Low": 3,

};

let assending = true;

let sorting = function () {

  let items = Array.from(dv.getElementsByTagName('p'));
  items.sort(function (a, b) {
    let first = a.getAttribute("data-priority");
    let second = b.getAttribute("data-priority");

    if (assending) {
      return priority[first] - priority[second];
    }
    else {
      return priority[second] - priority[first];
    }

  })

  dv.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    dv.appendChild(items[i]);
  }
  assending = !assending;
  sort.innerText = assending ? "Ascending" : "Descending";
}


sort.addEventListener('click', sorting);
