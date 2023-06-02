// ## NAVBAR FIXED ##
// Ketika window/halaman di scroll
window.onscroll = function () {
  const menu = document.querySelector(".menu"); // ambil elemen class menu
  const fixedNav = menu.offsetTop; // ambil jarak dari atas hingga elemen class menu

  // Apabila jarak menu bertambah (melebihi fixedNav)
  if (window.pageYOffset > fixedNav) {
    menu.classList.add("menu-fixed"); // menambah class menu-fixed
  } else {
    menu.classList.remove("menu-fixed"); // menghapus class menu-fixed
  }
};

// ## SIDEBAR ##
// Ambil elemen tombol sidebar dan juga content dari sidebar
const sidebarBtn = document.querySelector(".sidebar-btn span");
const sidebarContent = document.querySelector(".sidebar-content");

// Ketika tombol sidebar diclick
sidebarBtn.onclick = function () {
  // toggle = ketika ada -> hapus, ketika tidak ada -> tambah
  sidebarContent.classList.toggle("active"); // toggle class active
};

// Ketika sebuah document/halaman saat ini diclick
document.onclick = function (e) {
  // Apabila yang diclick bukan tombol sidebar dan content dari sidebar
  if (!sidebarBtn.contains(e.target) && !sidebarContent.contains(e.target)) {
    sidebarContent.classList.remove("active"); // hapus class active
  }
};

// ## HERO BACKGROUND ##
var bg = document.querySelector(".hero"); // ambil elemen class hero
var url = window.location.href; // ambil url dari halaman saat ini
var fileName = url.split(/(\\|\/)/g).pop(); // lakukan split sehingga mendapatkan nama file nya saja
// Apabila fileName nya form.html
if (fileName == "form.html") {
  bg.style.background = "url(../img/header2.jpg)"; // ubah background
}
