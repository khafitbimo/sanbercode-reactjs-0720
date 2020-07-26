// Fungsi Hitung Luas Lingkaran =============================================================

function hitungLuasLingkaran(radius) {
    var luas = 0; 
    if (radius % 7 == 0) { // radius kelipatan 7 phi = 22/7
         luas = (22/7) * (radius * radius);
      
    }else{ // radius bukan kelipatan 7 phi = 3.14
        luas  = 3.14 * (radius * radius);
    }

    return luas;
    
}

var luasLingkaran =  hitungLuasLingkaran(5);
console.log(luasLingkaran);

// Fungsi Hitung Luas Segitiga =============================================================

function hitungLuasSegitiga(alas,tinggi) {
    var luas  = 1/2 * alas * tinggi;

    return luas;

}

var luasSegitiga =  hitungLuasSegitiga(4,4);
console.log(luasSegitiga);

// Fungsi Hitung Luas Persegi =============================================================

function hitungLuasPersegi(sisi) {
    var luas = sisi * sisi;
    return luas;
}

var luasPersegi =  hitungLuasPersegi(4);
console.log(luasPersegi);