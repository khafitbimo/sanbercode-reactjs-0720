// soal 1 ======================================================================================================

console.log("// soal 1 ======================================================================================================")

function halo() {
    return "Halo Sanbers!";
}

console.log(halo());

// soal 2 ======================================================================================================

console.log("// soal 2 ======================================================================================================")

function kalikan(par1,par2) {
    return par1 * par2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1,num2);
console.log(hasilKali);

// soal 3 ======================================================================================================

console.log("// soal 3 ======================================================================================================")

function introduce(parName,parAge,parAddress,parHobby) {
    var strName = 'Nama saya ' + parName;
    var strAge = 'umur saya ' + parAge.toString() + ' tahun';
    var strAddress = 'alamat saya di ' + parAddress;
    var strHobby = 'dan saya punya hobby yaitu ' + parHobby + '!';

    return strName.concat(', ',strAge,', ',strAddress,', ',strHobby);
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name,age,address,hobby);
console.log(perkenalan);