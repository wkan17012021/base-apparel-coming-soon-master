const userInput = document.getElementById("contact_email");
const emailSubmitBtn = document.getElementById("submit-button");
let emailform = document.getElementById("email_form");
const errorMsg = document.createTextNode("please provide a valid email");
const errorPara = document.createElement("p");
errorPara.appendChild(errorMsg);
const errorElem = emailform[1];
let userVal = "";

emailSubmitBtn.addEventListener("click", () => {
  userVal = userInput.value;
  testVal();
});

function testVal() {
  if (userVal === "") {
    errorElem.appendChild(errorPara);
  } else {
    console.log(userVal);
  }
}
