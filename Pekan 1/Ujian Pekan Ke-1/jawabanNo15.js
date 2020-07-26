var jenisKelamin = 'L';
var nama = "Khafit Bimo";

switch (jenisKelamin.toUpperCase()) {
    case 'L':
        console.log("Bapak " + nama);
        break;
    case 'P':
        console.log("Ibu " + nama);
        break;
    default:
        console.log("Not Defined");
        break;
}