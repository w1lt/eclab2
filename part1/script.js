/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("nameForm");
  const welcomeMessage = document.getElementById("welcomeMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    welcomeMessage.innerHTML = `<p>Welcome, ${name}!</p>`;
    form.reset();
  });
});
