// Navbar Fixed
window.onscroll = function () {
  const menu = document.querySelector(".menu");
  const fixedNav = menu.offsetTop;

  if (window.pageYOffset > fixedNav) {
    menu.classList.add("menu-fixed");
  } else {
    menu.classList.remove("menu-fixed");
  }
};

// Sidebar
const sidebarBtn = document.querySelector(".sidebar-btn span");
const sidebarContent = document.querySelector(".sidebar-content");

sidebarBtn.onclick = function () {
  sidebarContent.classList.toggle("active");
};

document.onclick = function (e) {
  if (!sidebarBtn.contains(e.target) && !sidebarContent.contains(e.target)) {
    sidebarContent.classList.remove("active");
  }
};

// Validate Form
const formInput = document.querySelectorAll(".form-input");
var form = document.getElementById("myForm");

function validate() {
  formInput.forEach(function (input) {
    var inputName = input.getAttribute("id");
    var pesanError = input.nextElementSibling;

    // Validasi Nama Lengkap
    if (inputName == "nama") {
      var namaPattern = /^[\D]+$/;
      if (input.value == "") {
        pesanError.innerHTML = "Maaf field tidak boleh kosong!!";
      } else if (!namaPattern.test(input.value)) {
        pesanError.innerHTML = "Field harus berisi huruf";
      } else {
        pesanError.innerHTML = "";
      }
    }

    // Validasi Email
    if (inputName == "email") {
      var emailPattern = /^[\S]+@[\S]+\.[\S]+$/;
      if (input.value == "") {
        pesanError.innerHTML = "Maaf field tidak boleh kosong!!";
      } else if (!emailPattern.test(input.value)) {
        pesanError.innerHTML = "Email tidak valid";
      } else {
        pesanError.innerHTML = "";
      }
    }

    // Validasi Umur
    if (inputName == "umur") {
      var umurPattern = /^[\d]+$/;
      if (input.value == "") {
        pesanError.innerHTML = "Maaf field tidak boleh kosong!!";
      } else if (parseInt(input.value) < 17 || parseInt(input.value) > 70) {
        pesanError.innerHTML =
          "Umur harus lebih dari 17 dan kurang dari 70 tahun";
      } else if (!umurPattern.test(input.value)) {
        pesanError.innerHTML = "Field harus berisi angka";
      } else {
        pesanError.innerHTML = "";
      }
    }

    // Validasi Pesan
    if (inputName == "pesan") {
      if (input.value == "") {
        pesanError.innerHTML = "Maaf field tidak boleh kosong!!";
      } else {
        pesanError.innerHTML = "";
      }
    }

    // Validasi Jumlah Kamar
    if (inputName == "kamar") {
      var umurPattern = /^[\d]+$/;
      if (input.value == "") {
        pesanError.innerHTML = "Maaf field tidak boleh kosong!!";
      } else if (parseInt(input.value) < 1 || parseInt(input.value) > 5) {
        pesanError.innerHTML = "Maksimal 5 kamar";
      } else if (!umurPattern.test(input.value)) {
        pesanError.innerHTML = "Field harus berisi angka";
      } else {
        pesanError.innerHTML = "";
      }
    }
  });

  return pesanError;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let pesanError = validate();

  if (pesanError != "") {
    form.submit();
  }
});
