const emailEl = document.getElementById("email");
const pwEl = document.getElementById("password");

document.getElementById("loginBtn").addEventListener("click", () => {
  const email = emailEl.value.trim();
  const pw = pwEl.value.trim();

  window.location.href = "home.html";
});

document.getElementById("guestBtn").addEventListener("click", () => {
  window.location.href = "home.html?guest=true";
});

document.getElementById("signupBtn").addEventListener("click", () => {
  window.location.href = "signup.html";
});

document.getElementById("forgotBtn").addEventListener("click", () => {
  window.location.href = "forgot.html";
});
