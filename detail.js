const params = new URLSearchParams(window.location.search);

const judul = decodeURIComponent(params.get("judul"));
const harga = params.get("harga");
const img1 = params.get("img1");
const img2 = params.get("img2");
const penulis = decodeURIComponent(params.get("penulis"));
const kondisi = decodeURIComponent(params.get("desk"));

document.getElementById("judul").textContent = judul;
document.getElementById("harga").textContent = "Rp " + Number(harga).toLocaleString('id-ID');
document.getElementById("penulis").textContent = penulis;
document.getElementById("kondisi").textContent = kondisi;

const mainImg = document.getElementById("mainImg");
const thumb1 = document.getElementById("thumb1");
const thumb2 = document.getElementById("thumb2");

mainImg.src = "gmbr/" + img1;
thumb1.src = "gmbr/" + img1;
thumb2.src = "gmbr/" + img2;

thumb1.onclick = () => mainImg.src = "gmbr/" + img1;
thumb2.onclick = () => mainImg.src = "gmbr/" + img2;

document.getElementById("waLink").href =
  "https://wa.me/6283874489785?text=Saya tertarik dengan buku " + judul;