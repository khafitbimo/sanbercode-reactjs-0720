// soal 1 ======================================================================================================

console.log("// soal 1 ======================================================================================================")

var selisih = 2;
var angkaNow = 0;
var angkaMax = 20;
while(angkaNow <= angkaMax) {
    if (angkaNow == 0) {
        console.log('LOOPING PERTAMA');
    }else{
        console.log(angkaNow + ' - I Love Coding');
    }
    angkaNow += selisih; 
};
while (angkaNow > 0) {
    if (angkaNow > angkaMax) {
        console.log('LOOPING KEDUA');
    }else{
        console.log(angkaNow + ' - I will become a frontend developer');
    }
    angkaNow -= selisih;
}

// soal 2 ======================================================================================================

console.log("// soal 2 ======================================================================================================")

for (var i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        if (i % 3 == 0) {
            console.log(i + ' - I Love Coding'); 
        }else{
            console.log(i + ' - Santai'); 
        }           
    } else if (i % 2 == 0) {
        console.log(i + ' - Berkualitas');  
    }    
}

// soal 3 ======================================================================================================

console.log("// soal 3 ======================================================================================================")

var str = new Array;
for (var j = 0; j < 7; j++) {
    str.push('#');
    console.log(str.join(''));
}

// soal 4 ======================================================================================================

console.log("// soal 4 ======================================================================================================")

var kalimat="saya sangat senang belajar javascript"
var kalimatSplit = kalimat.split(' ');
console.log(kalimatSplit);

// soal 5 ======================================================================================================

console.log("// soal 5 ======================================================================================================")

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var daftarBuatSort = daftarBuah.sort();

for (var k = 0; k < daftarBuatSort.length; k++) {
    console.log(daftarBuatSort[k]);
}
