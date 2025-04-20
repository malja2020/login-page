const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const showLogin = document.getElementById("show-login");
const showRegister = document.getElementById("show-register");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");

// toggle views
showLogin.onclick = () => {
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
};

showRegister.onclick = () => {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
};

// show popup
function showPopup(message, color = "#2ecc71") {
  popupMessage.textContent = message;
  popup.style.background = color;
  popup.classList.add("show");
  setTimeout(() => popup.classList.remove("show"), 3000);
}

// login validation
loginForm.onsubmit = (e) => {
  e.preventDefault();
  let email = document.getElementById("login-email").value.trim();
  let pass = document.getElementById("login-password").value.trim();
  let emailErr = document.getElementById("login-email-error");
  let passErr = document.getElementById("login-pass-error");
  emailErr.textContent = passErr.textContent = "";

  if (!email || !pass) {
    if (!email) emailErr.textContent = "Email is required";
    if (!pass) passErr.textContent = "Password is required";
    return;
  }

  showPopup("Login successful!");
  loginForm.reset();
};

// register validation
registerForm.onsubmit = (e) => {
  e.preventDefault();
  let username = document.getElementById("register-username").value.trim();
  let email = document.getElementById("register-email").value.trim();
  let pass = document.getElementById("register-password").value.trim();
  let userErr = document.getElementById("register-user-error");
  let emailErr = document.getElementById("register-email-error");
  let passErr = document.getElementById("register-pass-error");
  userErr.textContent = emailErr.textContent = passErr.textContent = "";

  if (!username || !email || !pass) {
    if (!username) userErr.textContent = "Username is required";
    if (!email) emailErr.textContent = "Email is required";
    if (!pass) passErr.textContent = "Password is required";
    return;
  }

  showPopup("Registration successful!");
  registerForm.reset();
};
