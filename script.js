document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("surpriseBtn");
  const message = document.getElementById("moreMessage");

  button.addEventListener("click", function () {
    message.classList.remove("hidden");
  });
});
