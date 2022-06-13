const emailSubmitBtn = document.getElementById("submit-button");
const errorMsgTag = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon-wrapper");
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

emailSubmitBtn.addEventListener("click", (event) => {
  errorMsgTag.classList.remove("text-success");
  errors = [];
  event.preventDefault();
  const userInput = document.getElementById("contact_email").value;

  if (userInput == null || userInput == undefined) {
    errors.push("Please provide a valid email");
    errorIcon.style.visibility = "visible";
    errorMsgTag.innerHTML = errors[0];
    errorMsgTag.style.color = "red";
  } else if (!userInput.match(RegEmail)) {
    errors.push("Please provide a valid email");
    errorIcon.style.visibility = "visible";
    errorMsgTag.innerHTML = errors[0];
    errorMsgTag.style.color = "red";
  }

  if (!errors.length > 0) {
    errorIcon.style.display = "none";
    errorMsgTag.classList.add("text-success");
    errorMsgTag.innerText = "Thank you for subscribing to our newsletter.";
    removeUserInput();
  }
});

function removeUserInput() {
  document.getElementById("contact_email").value = "";
}
