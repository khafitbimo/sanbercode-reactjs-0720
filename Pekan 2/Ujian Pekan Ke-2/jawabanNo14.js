let volBalok = (...rest)=>{
    return `Volume Balok dengan panjang : ${rest[0]}, lebar : ${rest[1]}, tinggi : ${rest[2]} adalah ${rest[0] * rest[1] * rest[2]}`
}

let volKubus = (...rest)=>{
    return `Volume Kubus dengan panjang : ${rest[0]}, lebar : ${rest[1]}, tinggi : ${rest[2]} adalah ${rest[0] * rest[1] * rest[2]}`
}

let hitungBalok = volBalok(2,5,8)
console.log(hitungBalok);

let hitungKubus = volKubus(3,3,3)
console.log(hitungKubus);