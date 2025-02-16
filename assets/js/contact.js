document.getElementById("contact").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form melakukan submit default

  let nama = document.getElementById("name").value;
  let namaBelakang = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("message").value;

  let nomorWhatsApp = "6287760871393"; // Ganti dengan nomor WhatsApp tujuan (gunakan format internasional tanpa "+")

  let teksPesan = `Halo, saya ${nama} ${namaBelakang}%0AEmail: ${email}%0A%0A${pesan}`;

  let urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${teksPesan}`;

  window.open(urlWhatsApp, "_blank"); // Membuka WhatsApp dengan pesan otomatis
});
