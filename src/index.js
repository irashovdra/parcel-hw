// src/index.js
import { saveFormData } from "./formData.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".feedback-form");
  const successMessage = document.querySelector(".success-message");

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
