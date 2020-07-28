// di index.js
var readBooks = require('./callback.js');

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'Komik', timeSpent: 1000}
]

// Tulis code untuk memanggil function readBooks di sini
var time = 10000;
var counter = 0;

function bacaBuku() {
    readBooks(time,books[counter],function(sisaWaktu) {
        time = sisaWaktu;
        counter++
        if(counter < books.length) bacaBuku();
    })
}

bacaBuku();
