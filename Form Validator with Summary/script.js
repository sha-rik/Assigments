let isValid = 1;

let summary = document.getElementById("summarySection");
let naam = document.getElementById("nameInput");
let eml = document.getElementById("emailInput");
let pass = document.getElementById("passwordInput");
let confirm = document.getElementById("confirmPasswordInput");


let check = function (e) {
  let para = this.nextElementSibling;
  let text = e.target.value.trim();

  para.innerText = "";

  if (text.length === 0) {
    para.innerText = "Mandatory Field";
    para.style.color = "red";
    para.style.fontSize = "12px";
    isValid = 0;
    return;
  }

  if (this.id === "emailInput") {
    if (!text.includes("@")) {
      para.innerText = "Email must contain @";
      para.style.color = "red";
      para.style.fontSize = "12px";
      isValid = 0;
    }
  }
};

naam.addEventListener("blur", check);
eml.addEventListener("blur", check);



function validatePassword() {
  let msg = this.nextElementSibling;

  let passVal = pass.value.trim();
  let confirmVal = confirm.value.trim();

  msg.innerText = "";

  
  if (this.value.trim() === "") {
    msg.innerText = "Mandatory Field";
    msg.style.color = "red";
    msg.style.fontSize = "12px";
    isValid = 0;
    return;
  }


  if (passVal !== "" && confirmVal !== "") {
    let passMsg = pass.nextElementSibling;
    let confirmMsg = confirm.nextElementSibling;

    if (passVal === confirmVal) {
      passMsg.innerText = "Passwords match";
      passMsg.style.color = "green";

      confirmMsg.innerText = "";
    } else {
      confirmMsg.innerText = "Passwords do not match!";
      confirmMsg.style.color = "red";
      confirmMsg.style.fontSize = "12px";

      passMsg.innerText = "";
      isValid = 0;
    }
  }
}

pass.addEventListener("input", validatePassword);
confirm.addEventListener("input", validatePassword);


let form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  isValid = 1;
  naam.dispatchEvent(new Event("blur"));
  eml.dispatchEvent(new Event("blur"));
  pass.dispatchEvent(new Event("input"));
  confirm.dispatchEvent(new Event("input"));

  if (!isValid) {
    summary.innerHTML = "";
    return;
  }

  let nameVal = naam.value.trim();
  let emailVal = eml.value.trim();

  summary.innerHTML = `
    <h3>Registration Summary</h3>
    <p><strong>Name:</strong> ${nameVal}</p>
    <p><strong>Email:</strong> ${emailVal}</p>
  `;
});