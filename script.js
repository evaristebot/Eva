function getData() {
  return {
    nom: nom.value,
    prenom: prenom.value,
    tel: tel.value,
    nationalite: nationalite.value,
  };
}

async function envoyerDB() {
  const data = getData();

  const res = await fetch("/api/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  alert(res.ok ? "Enregistré" : "Erreur");
}

function envoyerWhatsApp() {
  const d = getData();
  const msg = `ARJAP\nNom:${d.nom}\nPrénom:${d.prenom}\nTel:${d.tel}\nNat:${d.nationalite}`;
  window.open(`https://wa.me/237653794702?text=${encodeURIComponent(msg)}`);
}

function envoyerEmail() {
  const d = getData();
  window.location.href =
    `mailto:tonemail@gmail.com?subject=ARJAP&body=` +
    encodeURIComponent(JSON.stringify(d, null, 2));
    }
