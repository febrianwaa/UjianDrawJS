console.log("Gambar Kotak")

function kotak(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < panjang; j++) {
            hasil += '*';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(kotak(5),'\n');

//---------------------------------------------------------------

console.log("Gambar Segitiga")

function segitiga(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '*';
            
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga(5),'\n');

//-----------------------------------------------------------------

console.log("Gambar Segitiga Terbalik")

function segitigaterbalik(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i ; j--) {
            hasil += '*';
            
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitigaterbalik(5),'\n');

//------------------------------------------------------------------

console.log("Gambar Kotak Selang Seling")

function kotakselangseling(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < panjang; j++) {
            if((i%2==0 && j%2==1) || (i%2==1 && j%2==0)){
                hasil += '*';
            } else {
                hasil += '!';
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(kotakselangseling(5),'\n');

//---------------------------------------------------------------------


console.log("Gambar Kotak Pola")

function kotakpola(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < panjang; j++) {
            if((i%2==0 && j%2==1) || (i%2==1 && j%2==0)){
                hasil += '*';
            } else {
                hasil += '!';
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(kotakpola(5),'\n');






















    