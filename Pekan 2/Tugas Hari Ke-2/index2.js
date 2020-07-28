var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'Komik', timeSpent: 1000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
var time = 10000;
var counter = 0;

function bacaBuku() {
    readBooksPromise(time,books[counter])
            .then(function(sisaWaktu) {
                time = sisaWaktu;
                counter ++;
                if(counter < books.length) bacaBuku();
            })
            .catch(function(error) {
                console.log(error.message)
            })
}

bacaBuku();