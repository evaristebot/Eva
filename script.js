document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Animation de validation
    form.style.opacity = "0.5";

    setTimeout(() => {
      alert("🎉 Bienvenue à ARJAP !\nVotre inscription a été enregistrée.");
      form.reset();
      form.style.opacity = "1";
    }, 500);
  });
});
