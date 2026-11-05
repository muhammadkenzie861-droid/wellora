const databerita = [
    {
        id: 1,
        judul: "Belajar DOM pada JavaScript",
        deskripsi: "Belajar cara mengakses dan memanipulasi elemen HTML menggunakan DOM JavaScript.",
        isiberita: "DOM memungkinkan JavaScript mengakses dan mengubah struktur, isi, serta tampilan halaman HTML secara dinamis."
    },
    {
        id: 2,
        judul: "Membuat Website Interaktif",
        deskripsi: "Membuat halaman web yang dapat merespons tindakan pengguna.",
        isiberita: "Dengan event listener dan manipulasi DOM, halaman web dapat merespons klik, input, dan tindakan pengguna lainnya."
    },
    {
        id: 3,
        judul: "Memahami Template HTML",
        deskripsi: "Menggunakan template untuk menampilkan konten secara dinamis.",
        isiberita: "Template HTML membantu menyiapkan struktur halaman yang dapat diisi dengan data menggunakan JavaScript."
    },
    {
        id: 4,
        judul: "Belajar JavaScript Dasar",
        deskripsi: "Mengenal dasar-dasar pemrograman JavaScript.",
        isiberita: "JavaScript menyediakan variabel, fungsi, kondisi, dan perulangan untuk membangun perilaku halaman web."
    },
    {
        id: 5,
        judul: "Manipulasi Elemen HTML",
        deskripsi: "Mengubah isi dan atribut elemen HTML menggunakan JavaScript.",
        isiberita: "Properti textContent dan metode querySelector dapat digunakan untuk mengubah elemen HTML dengan aman."
    },
    {
        id: 6,
        judul: "Menampilkan Data Dinamis",
        deskripsi: "Menampilkan data dari array ke halaman web.",
        isiberita: "Data dari array dapat diproses dengan perulangan lalu ditampilkan ke elemen HTML yang sesuai."
    }
    
];
const daftarKartu = document.getElementById("daftar-kartu");
const template = document.querySelector("#template-info");
if (daftarKartu && template){
databerita.forEach(({ id, judul, deskripsi }) => {
    //membuat duplikat template
    const kartu= template.content.cloneNode(true); //2

    //mengambil element article dari salinan template dan mengisi datanya
    const templatekartu = kartu.querySelector("a");
    templatekartu.href = `berita-detail.html?id=${id}`;

    //mengisi data
    templatekartu.querySelector(".judul").textContent = judul;
    templatekartu.querySelector(".deskripsi").textContent = deskripsi;

    //menambahkan kartu ke dalam daftar
    daftarKartu.appendChild(kartu);
});
}



const detailberita = document.getElementById("berita-detail");
//memastikan ada detail berita
if (detailberita) {
//mengambil parameter id dari url
const parameter = new URLSearchParams(window.location.search);
const idberita = parameter.get("id");

//mencari berita berdasarkan id
const berita = databerita.find((item) => item.id === parseInt(idberita));

 //memastikan berita ditemukan
 if (berita) {
    //mengambil element template dan mengisi datanya
    const judulberita = detailberita.querySelector(".judul1");
    const deskripsiberita = detailberita.querySelector(".psi");
    const isiberita = detailberita.querySelector(".isi");

    judulberita.textContent = berita.judul;
    deskripsiberita.textContent = berita.deskripsi;
    isiberita.textContent = berita.isiberita;
    detailberita.hidden = false;
}
}



const music = new Audio("musik.mp3");
const tombol = document.getElementById("tombol");
if (tombol) {
    tombol.addEventListener("click", () => {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    });
}
