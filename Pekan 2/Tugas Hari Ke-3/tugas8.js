// Soal 1 =============================================================================
console.log("Soal 1 ===================================================================")

// Rumus Luas Lingkaran ===============================================================
console.log(" > Function Luas Lingkaran ===============================================")

var luasLingkaran = (radius) => {
    let luas = 0;

   if (radius % 7 == 0) { // radius kelipatan 7 phi = 22/7
        luas = (22/7) * (radius * radius);
     
   }else{ // radius bukan kelipatan 7 phi = 3.14
       luas  = 3.14 * (radius * radius);
   }

   return luas;
}

console.log(luasLingkaran(7))

// Rumus Luas Lingkaran ===============================================================
console.log(" > Function Keliling Lingkaran ===============================================")

var kelilingLingkaran = (radius) => {
    let keliling = 0;
    
    if (radius % 7 == 0) { // radius kelipatan 7 phi = 22/7
        keliling = 2 * 22/7 * radius;
     
   }else{ // radius bukan kelipatan 7 phi = 3.14
    keliling  = 2 * 3.14* radius;
   }

   return keliling;
}

console.log(kelilingLingkaran(7))

// Soal 2 =============================================================================
console.log("Soal 2 ===================================================================")

var tambahKata= (kalimat,kata) => {
    if (kalimat != '') {
        kalimat += ` ${kata}`
    } else {
        kalimat += `${kata}`
    }

    return kalimat
}

let kata = ['saya','adalah','seorang','frontend','developer']

let kalimatStr = '';
let index = 0

// kata.forEach(element => {
//     kalimatStr = tambahKata(kalimatStr,element)
//     console.log(kalimatStr)
// });

var joinKata = () => {
    setTimeout(() => {
        kalimatStr = tambahKata(kalimatStr,kata[index])
        console.log(kalimatStr);
        index++
        if (index < kata.length) {
            joinKata();
        }
        
    }, 1000);
}

joinKata();

// Soal 3 =============================================================================

class Book{
    constructor(parName,parTotalPage,parPrice){
        // this._name = parName
        // this._totalPage = parTotalPage
        // this._price = parPrice

        this._book = {
            namaBuku : parName,
            totalPage : parTotalPage,
            price : parPrice
        }

    }

    get name(){
        return this._book.namaBuku
    }

    set name(val){
        this._book.namaBuku = val
    }

    get totalPage(){
        return this._book.totalPage
    }

    set totalPage(val){
        this._book.totalPage = val
    }

    get price(){
        return this._book.price
    }

    set price(val){
        this._book.price = val
    }

    show(){
        return this._book;
    }
}

class Comic extends Book{
    constructor(parName,parTotalPage,parPrice,parIsColorful){
        super(parName,parTotalPage,parPrice)
        this._book.isColorful = parIsColorful
    }

    get isColorful(){
        return this._book.isColorful
    }

    set isColorful(val){
        this._book.isColorful = val
    }
    
    show(){
        
        return this._book
        
    }
}

// Supaya log ini muncul setelah jawaban soal 2 selesai semua ----------------------------------------

setTimeout(() => {
    console.log("Soal 3 ===================================================================")
    let newBook = new Book('Fisika',120,35000);
    console.log(newBook.show());
    newBook.totalPage = 500
    console.log(newBook.show());
    let newComic = new Comic('Conan',180,10000,true);
    console.log(newComic.show());
}, 6000);
