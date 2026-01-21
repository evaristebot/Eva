function envoyerWhatsApp(numero) {
  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const telephone = document.getElementById("telephone").value.trim();
  const nationalite = document.getElementById("nationalite").value.trim();

  if (!nom || !prenom || !telephone || !nationalite) {
    alert("Veuillez remplir tous les champs");
    return;
  }

  const message = `Bonjour ARJAP 👋
Nom : ${nom}
Prénom : ${prenom}
Téléphone : ${telephone}
Nationalité : ${nationalite}`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

document.getElementById("btn1").addEventListener("click", function() {
  envoyerWhatsApp("237654823558");
});

document.getElementById("btn2").addEventListener("click", function() {
  envoyerWhatsApp("237653794702");
});
