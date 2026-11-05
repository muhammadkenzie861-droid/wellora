const databerita = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        prafA: "Nutrisi",
        prafB: "5 mnt baca",
        judul: "5 Langkah Memulai Pola Makan Sehat Tanpa Diet Menyiksa",
        deskripsi: "Pelajari cara menyeimbangkan porsi karbohidrat, protein, dan serat harian secara bertahap tanpa<br> perlu rasa lapar berlebihan.",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        prafA: "Kebugaran",
        prafB: "4 mnt baca",
        judul: "Berapa Langkah Kaki yang Sebenarnya Dibutuhkan Tubuh?",
        deskripsi: "Kupas tuntas mitos 10.000 langkah dan fakta ilmiah tentang kebutuhan gerak harian untuk menjaga kesehatan jantung dan stamina.",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
       prafA: "olahraga",
        prafB: "5 mnt baca",
        judul: "Rahasia Tidur Nyenyak Demi Produktivitas Maksimal",
        deskripsi: "Kualitas tidur menentukan metabolisme tubuh. Terapkan 4 kebiasaan malam ini untuk bangun<br> dengan energi penuh keesokan hari.",
    },
    ];
    
const daftarKartu = document.querySelector(".all-draf");
const kartuAwal = document.querySelector(".edu-draf");

if (daftarKartu && kartuAwal) {
    databerita.forEach(({ id, prafA, prafB, judul, deskripsi }, index) => {
        const kartu = index === 0 ? kartuAwal : kartuAwal.cloneNode(true);
        const tautan = kartu.querySelector(".all-praf");

        tautan.href = `detail/detailberita.html?id=${id}`;

        kartu.querySelector(".praf-a").textContent = prafA;
        kartu.querySelector(".praf-b").textContent = prafB;
        kartu.querySelector(".loh").textContent = judul;
        kartu.querySelector(".loj").innerHTML = deskripsi;
kartu.querySelector(".salad").src = databerita[index].img;
        if (index > 0) {
            daftarKartu.appendChild(kartu);
        }
    });
}