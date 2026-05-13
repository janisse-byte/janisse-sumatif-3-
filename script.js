
let cart = 0;

function beli(nama){
    cart++;

    document.getElementById("cart").innerText = cart;

    alert(nama + " ditambahkan ke keranjang");
}

function daftar(){

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let telp = document.getElementById("telp").value;

    if(!nama || !email || !telp){
        alert("Isi semua data!");
        return;
    }

    
    localStorage.setItem("nama", nama);
    localStorage.setItem("email", email);
    localStorage.setItem("telp", telp);

    alert("Pendaftaran berhasil!");

    window.location.href = "home.html";
}