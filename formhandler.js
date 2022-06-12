const userInput = document.getElementById("contact_email");
const emailSubmitBtn = document.getElementById("submit-button");
const errorMsgTag = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon-wrapper");
let userVal = "";

emailSubmitBtn.addEventListener("click", () => {
  userVal = userInput.value;
  testVal();
});

function testVal() {
  if (userVal === "") {
    errorMsgTag.textContent = "please provide a valid email";
    alertIcon();
  } else {
    console.log(userVal);
  }
}

let flag = true;
function alertIcon() {
  flag = false;
  if (!flag) {
    console.log(flag);
    errorIcon.style.visibility = "visible";
  }
  setTimeout(() => {
    flag = true;
    if (flag) {
      errorIcon.style.visibility = "invisible";
    }
    console.log("time out function ran");
  }, 3000);
}
