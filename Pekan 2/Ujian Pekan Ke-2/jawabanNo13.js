let pesertaLomba= [
    ["Budi", "Pria", "172cm"], 
    ["Susi", "Wanita", "162cm"], 
    ["Lala", "Wanita", "155cm"], 
    ["Agung", "Pria", "175cm"]
]


let peserta = pesertaLomba.map((x)=>{
    return {
        nama : x[0],
        jenisKel : x[1],
        tinggi : x[2]
    }
})

console.log(peserta)