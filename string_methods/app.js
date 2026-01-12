//String sınıfı metodları 

let baslik = "Javascript Dersleri"
let tarih = 2026;

//#region CharAt Fonksiyonu
let karakter = baslik.charAt(1) //Belirttigim index degerindeki karakteri doner.
console.log(karakter);
//#endregion

//#region concat()

//Concat fonksiyonu iki veya daha fazla seyi orijinalini bozmadan kopyalayarak birlestirmek icin kullanilir.
let sonuc = baslik.concat(" ",tarih, " ", "Hasan")
console.log(sonuc);

//#endregion

//#region IndexOf()

//Verdigimiz degerin index numarasını getirir. Deger yoksa -1 dondurur
let index = baslik.indexOf("s")
console.log(index);
//#endregion