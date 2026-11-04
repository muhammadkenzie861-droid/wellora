const databerita = [
    {
id: 1,
judul: "Belajar DOM javascript",
deskripsi: "Belajar cara mengakses dan memanipulasi elemen HTML menggunakan DOM javascript",
    },
    {
        id: 2,
judul: "Website Interaktif",
deskripsi: "template dapat digunakan untuk menampilkan konten secara dinamis",
    },
    {
        id: 3,
judul: "Belajar DOM javascript",
deskripsi: "template dapat digunakan untuk menampilkan konten secara dinamis",
    },
        {
id: 4,
judul: "Belajar DOMsada javascript",
deskripsi: "Belajar cara mengakses dan memanipulasi elemen HTML menggunakan DOM javascript",
    },
    {
        id: 5,
        judul: "Belajar DOMsada javascript",
        deskripsi: "Belajar cara mengakses dan memanipulasi elemen HTML menggunakan DOM javascript",
    },
    {
    id: 6,
judul: "Belajar DOMsada javascript",
deskripsi: "Belajar cara mengakses dan memanipulasi elemen HTML menggunakan DOM javascript",
    },
    
];

const template = document.querySelector("#template-info");
databerita.forEach(({ id, judul, deskripsi }) => {
    //membuat duplikat template
    const kartu= template.content.cloneNode(true); //2
const daftarKartu = document.getElementById("daftar-kartu");
    //mengambil element article dari salinan template dan mengisi datanya
    const templatekartu = kartu.querySelector("article");

    //mengisi data
    templatekartu.querySelector(".judul").textContent = judul;
    templatekartu.querySelector(".deskripsi").textContent = deskripsi;

    //menambahkan kartu ke dalam daftar
    daftarKartu.appendChild(kartu);
});
