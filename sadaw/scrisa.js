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

const template = document.querySelector("#temp");
const daftar = document.getElementById("daftar");



databerita.forEach(({ id, judul, deskripsi, isiberita }) => {

     const clone= template.content.cloneNode(true); //2
    //mengambil element article dari salinan template dan mengisi datanya
    const templatekartu = clone.querySelector("article");

     templatekartu.querySelector(".judul").textContent = judul;
    templatekartu.querySelector(".info").textContent = deskripsi;
    templatekartu.querySelector(".isi").textContent = isiberita;
     templatekartu.hidden = false;

    //menambahkan kartu ke dalam daftar
    daftar.appendChild(clone);
});