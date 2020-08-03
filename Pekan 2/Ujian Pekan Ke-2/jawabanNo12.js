class BangunDatar{
    constructor(parNama){
        this._nama = parNama
    }

    get nama(){
        return this._nama
    }

    set nama(val){
        this._nama = val
    }

    luas(){
        return ''
    }

    keliling(){
        return ''
    }
}

class Lingkaran extends BangunDatar{
    constructor(parNama,parRadius){
        super(parNama)
        this._radius = parRadius
        this._phi = parRadius % 7 === 0 ? (22/7) : 3.14
    }

    get radius(){
        return this._radius
    }

    set radius(val){
        this._radius = val
    }

    luas(){
        return `Luas lingkaran ${this._nama} dengan radius ${this._radius} adalah : ${this._phi * this._radius * this._radius}`
    }

    keliling(){
        return `Keliling lingkaran ${this._nama} dengan radius ${this._radius} adalah : ${2 * this._phi * this._radius}`
    }
}

class Persegi extends BangunDatar{
    constructor(parNama,parSisi){
        super(parNama)
        this._sisi = parSisi
    }

    get sisi(){
        return this._sisi
    }

    set sisi(val){
        this._sisi = val
    }

    luas(){
        return `Luas Persegi ${this._nama} dengan sisi ${this._sisi} adalah : ${this._sisi * this._sisi}`
    }

    keliling(){
        return `Keliling Persegi ${this._nama} dengan sisi ${this._sisi} adalah : ${4 * this._sisi}`
    }
}

let bangunDatar = new BangunDatar("lingkaran")
console.log(bangunDatar.luas())
console.log(bangunDatar.keliling())

let ling = new Lingkaran("lingkaran",7)
ling.nama = "new lingkaran"
ling.radius = 14
console.log(ling.keliling());
console.log(ling.luas())

let persegi = new Persegi("persegi",4)
persegi.nama = "new persegi"
persegi.sisi = 5
console.log(persegi.luas())
console.log(persegi.keliling())