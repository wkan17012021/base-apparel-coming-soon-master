const userInput = document.getElementById("contact_email");
const emailSubmitBtn = document.getElementById("submit-button");
const errorMsgTag = document.getElementById("error-msg");
let userVal = "";

emailSubmitBtn.addEventListener("click", () => {
  userVal = userInput.value;
  testVal();
});

function testVal() {
  if (userVal === "") {
    errorMsgTag.textContent = "please provide a valid email";
  } else {
    console.log(userVal);
  }
}
