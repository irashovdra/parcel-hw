import { saveFormData } from "./formData.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    saveFormData(formData);
    successMessage.style.display = "block";
  });
});
