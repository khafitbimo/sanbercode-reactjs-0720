// soal 1 ======================================================================================================

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var kataGabung = kataPertama.concat(' ',
                                    kataKedua.charAt(0).toUpperCase() + kataKedua.substr(1),
                                    ' ',
                                    kataKetiga,
                                    ' ',
                                    kataKeempat.toUpperCase());

console.log(kataGabung);

// soal 2 ======================================================================================================

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var hasilJumlah = parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat);

console.log(hasilJumlah);

// soal 3 ======================================================================================================

var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substr(0,3);
var kataKedua = kalimat.substr(4,10);
var kataKetiga = kalimat.substr(15,3);
var kataKeempat = kalimat.substr(19,5);
var kataKelima = kalimat.substr(25,6)

console.log('Kata Pertama : ' + kataPertama);
console.log('Kata Kedua : ' + kataKedua);
console.log('Kata Ketiga : ' + kataKetiga);
console.log('Kata Keempat : ' + kataKeempat);
console.log('Kata Kelima : ' + kataKelima);

// soal 4 ======================================================================================================

var nilai = 80;
var index = '';

if (nilai >= 80) {
    index = 'A';    
}else if(nilai >= 70 && nilai < 80) {
    index = 'B';
}else if(nilai >= 60 && nilai < 70) {
    index = 'C';
}else if (nilai >= 50 && nilai < 60) {
    index = 'D';
}else if (nilai < 50) {
    index = 'E';
};

console.log('Nilai : ' + nilai + ', Index : ' + index);

// soal 5 ======================================================================================================

var tanggal = 14;
var bulan = 6;
var tahun = 1989;
var bulanNama = '';

switch (bulan) {
    case 1:
        bulanNama = 'Januari';
        break;
    case 2:
        bulanNama = 'Februari';
        break;
    case 3:
        bulanNama = 'Maret';
        break;
    case 4:
        bulanNama = 'April';
        break;
    case 5:
        bulanNama = 'Mei';
        break;
    case 6:
        bulanNama = 'Juni';
        break;
    case 7:
        bulanNama = 'Juli';
        break;
    case 8:
        bulanNama = 'Agustus';
        break;
    case 9:
        bulanNama = 'September';
        break;
    case 10:
        bulanNama = 'Oktober';
        break;
    case 11:
        bulanNama = 'November';
        break;
    case 12:
        bulanNama = 'Desember';
        break;
    default:
        bulanNama = 'Not Defined'
        break;
}

console.log(tanggal.toString().concat(' ',bulanNama,' ',tahun.toString()));