function tampilkanBintang(jumlahBintang) {
    var barisBintang = '';
    for (var i = jumlahBintang; i > 0; i--) {
        
        for (var a = 1; a <= i; a++) {
            barisBintang += '*';
            
        }
        barisBintang +='\n';

    }
    return barisBintang;
}
console.log(tampilkanBintang(8));

    
    