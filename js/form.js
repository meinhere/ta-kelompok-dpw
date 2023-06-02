// ## VALIDATE FORM ##
const formInput = document.querySelectorAll(".form-input"); // ambil semua elemen dengan class form-input
var form = document.getElementById("myForm"); // ambil elemen dengan id form

// Set Default Value Date
const date = new Date(); // inisialisasi built-in function Date()
var year = date.getFullYear(); // ambil tahun sekarang
var month = date.getMonth() + 1; // ambil bulan sekarang (tambah 1 karena default isi = 0)
var day = date.getDate(); // ambil hari sekarang
month = month < 10 ? "0" + month : month; // apabila month < 10 maka tambahi "0" (untuk memenuhi format)
day = day < 10 ? "0" + day : day; // apabila day < 10 maka tambahi "0" (untuk memenuhi format)

var fullDate = `${year}-${month}-${day}`; // gabung tahun-bulan-hari
document.querySelector("#check-in").setAttribute("value", fullDate); // isi value elemen dengan id check-in

// Function Validate
function validate() {
  var hasError = false; // set hasError = false

  // ulang semua elemen formInput menjadi variabel input
  formInput.forEach(function (input) {
    var inputName = input.getAttribute("id"); // ambil attribute id dari setiap input
    var pesanError = input.nextElementSibling; // ambil elemen selanjutnya dari input (untuk pesanError)

    // Validasi Tanggal
    if (inputName == "check-in" || inputName == "check-out") {
      var dateNow = new Date(fullDate).getTime(); // ambil waktu (int) sekarang
      var dateReserved = new Date(input.value).getTime(); // ambil waktu (int) tanggal yang akan dipesan

      if (input.value == "") {
        pesanError.innerHTML = "Tanggal harus diisi";
      } else if (dateReserved < dateNow) {
        pesanError.innerHTML = "Tanggal tidak valid";
      } else {
        pesanError.innerHTML = "";
      }
    }

    // Validasi Nama Lengkap
    if (inputName == "nama") {
      var namaPattern = /^[\D]+$/;
      if (input.value == "") {
        pesanError.innerHTML = "Field tidak boleh kosong!!";
      } else if (input.value.length > 20) {
        pesanError.innerHTML = "Nama terlalu panjang";
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
        pesanError.innerHTML = "Field tidak boleh kosong!!";
      } else if (input.value.length > 25) {
        pesanError.innerHTML = "Email terlalu panjang";
      } else if (!emailPattern.test(input.value)) {
        pesanError.innerHTML = "Email tidak valid";
      } else {
        pesanError.innerHTML = "";
      }
    }

    // Validasi Nomor Telepon
    if (inputName == "telepon") {
      var teleponPattern = /^\+62[\d]+$/;
      if (input.value == "") {
        pesanError.innerHTML = "Field tidak boleh kosong!!";
      } else if (!teleponPattern.test(input.value)) {
        pesanError.innerHTML = "Nomor telepon tidak valid (awali dengan +62)";
      } else if (input.value.length > 14 || input.value.length < 12) {
        pesanError.innerHTML =
          "Nomor telepon tidak valid (digit terlalu pendek/panjang)";
      } else {
        pesanError.innerHTML = "";
      }
    }

    if (pesanError && pesanError.innerHTML != "") {
      hasError = true;
      input.style.border = "2px solid red";
    } else {
      hasError = false;
      input.style.border = "2px solid green";
    }
  });

  return hasError;
}

// Form pada saat di submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // matikan fungsi default dari form (ketika submit tidak terjadi apa-apa)
  var hasError = validate(); // panggil fungsi validate()

  // apabila tidak ada error
  if (hasError == false) {
    form.submit(); // submit form
  }
});

// Ketika inputan berubah
formInput.forEach(function (input) {
  var type = input.getAttribute("type"); // Ambil attribute type dari setiap elemen input

  // Apabila type input adalah text
  if (type == "text") {
    // maka akan memanggil fungsi validate() ketika event keyup
    input.addEventListener("keyup", function () {
      validate();
    });
  }

  // Apabila type input adalah date
  if (type == "date") {
    // maka akanm emanggil fungsi validate() ketika event change
    input.addEventListener("change", function () {
      validate();
    });
  }
});
