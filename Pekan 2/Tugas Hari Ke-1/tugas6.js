// Soal 1 ============================================================================
console.log("Soal 1 ============================================================================");
// array
var arrayDaftarPeserta = ["Asep","laki-laki","baca buku",1992];

// object
var objectDaftarPeserta = {
    nama : "Asep",
    "jenis kelamin" : "laki-laki",
    hobi : "baca buku",
    "tahun lahir" : 1992
};

console.log(objectDaftarPeserta);

// Soal 2 ============================================================================
console.log("Soal 2 ============================================================================");
var daftarBuah = [
    {
        nama : "Strawberry",
        warna : "Merah",
        "ada bijinya" : "tidak",
        harga : 9000
    },
    {
        nama : "Jeruk",
        warna : "Oranye",
        "ada bijinya" : "ada",
        harga : 8000
    },
    {
        nama : "Semangka",
        warna : "Hijau & Merah",
        "ada bijinya" : "ada",
        harga : 10000
    },
    {
        nama : "Pisang",
        warna : "Kuning",
        "ada bijinya" : "tidak",
        harga : 5000
    },
];
console.log(daftarBuah[0]); // memunculkan data pertama (index 0 dari array)


// Soal 3 ============================================================================
console.log("Soal 3 ============================================================================");

var dataFilm = [];

function tambahDataFilm(nama,durasi,genre,tahun) {
    var newFilm = {};
    newFilm.nama = nama;
    newFilm.durasi = durasi;
    newFilm.genre = genre;
    newFilm.tahun = tahun;
    dataFilm.push(newFilm);
}

tambahDataFilm("Si Doel","60 Menit","Drama",2019);
tambahDataFilm("The Wolverine","120 Menit","Action",2016);
console.log(dataFilm);

// Soal 4 ============================================================================
console.log("Soal 4 ============================================================================");
// Release 0 =========================================================================
console.log("Release 0 =========================================================================");

class Animal{
    constructor(name){
        this._name = name;
        this._legs = 4; // default
        this._cold_blooded = false; // default
    }
    get name(){
        return this._name;
    }
    set name(x){
        this._name = x;
    }
    get legs(){
        return this._legs;
    }
    set legs(x){
        this._legs = x;
    }
    get cold_blooded(){
        return this._cold_blooded;
    }
    set cold_blooded(x){
        this._cold_blooded = x;
    }
}

var sheep = new Animal("shaun");
 
console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded) 

// Release 1 =========================================================================
console.log("Release 1 =========================================================================");

class Frog extends Animal{
    constructor(name){
        super(name);
        super._legs = 2;
        super._cold_blooded = true;
    }
    jump(){
        console.log("hop hop");
    }
}

class Ape extends Animal{
    constructor(name){
        super(name);
        super._legs = 2;
    }
    yell(){
        console.log("Auooo");
    }
}

var kodok = new Frog("buduk")
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
kodok.jump();


var sungokong = new Ape("kera sakti")
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
sungokong.yell()

// Soal 5 ============================================================================
console.log("Soal 5 ============================================================================");

class Clock{
    constructor({template}){
        this._template = template;
    }

    render(){
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this._template.replace('h',hours).replace('m',mins).replace('s',secs);
        console.log(output);
    }

    start(){
        var self = this;
        this._timer = setInterval(function(){
            self.render();
        },1000);
    }

    stop(){
        clearInterval(this._timer);
    }
    
}

var clock = new Clock({template: 'h:m:s'});
clock.start();