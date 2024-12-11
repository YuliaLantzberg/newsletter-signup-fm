const form = document.querySelector(".signup__form");
const email = form.getElementsByClassName("signup__form-input")[0];
const emailErrorMessageElement = document.querySelector(
	".signup__form-label--error"
);
const dismissBtn = document.getElementById("dismiss-msg");
const signupPage = document.querySelector(".signup");
const successPage = document.querySelector(".success");

const errorClass = "error";
const activeClass = "active";

function validateEmail(email) {
	if (!email) return "Email is required";

	const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (!isValidEmail.test(email)) {
		return "Valid email required";
	}

	return "";
}

function handleSignupFormSubmit(e) {
	e.preventDefault();
	const emailErrorMessage = validateEmail(email.value);
	if (emailErrorMessage) {
		emailErrorMessageElement.innerText = emailErrorMessage;
		form.classList.add(errorClass);
	} else {
		const textEmail = document.getElementById("success__email");
		textEmail.innerText = email.value;
		signupPage.classList.remove(activeClass);
		signupPage.style.display = "none";
		successPage.classList.add(activeClass);
		successPage.style.display = "flex";
	}
}

function handleDismissMsg(e) {
	signupPage.classList.add(activeClass);
	signupPage.style.display = "flex";
	successPage.classList.remove(activeClass);
	successPage.style.display = "none";
	email.value = "";
}

function resetOnFocus(e) {
	emailErrorMessageElement.innerText = "";
	if (form.classList.contains(errorClass)) form.classList.remove(errorClass);
}

form.addEventListener("submit", handleSignupFormSubmit);
email.addEventListener("focus", resetOnFocus);
dismissBtn.addEventListener("click", handleDismissMsg);
