//String sınıfı metodları 

let baslik = "Modern Javascript Dersleri"
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

//#region Lastindexof
let index1 = baslik.lastIndexOf("Ders")
console.log(index1 + ". index");

//#endregion

//#region ToUpperCase
//Tüm alfabetik degerleri buyuk harfe donusturur.
//#endregion

//toLowerCase tum harfleri kucuk harfe cevirir.


//#region Trim
//En cok kullanacagimiz islemlerden bir tanesi
//Sagdaki ve soldaki bosluklari silip ham veriyi elde etmemizi saglar.
let deneme = "   Bu bir deneme yazisidir   "
console.log(deneme);
console.log(deneme.trim());

//#endregion

//#region Slice-Substring
//Bu metod verilen stringi dilimlemek icin kullanilir.
let ornek = "lorem ipsum dolor sit"
console.log(ornek);
console.log(ornek.slice(6,11));

console.log(ornek);
console.log(ornek.substring(0,6));
//#endregion

//#region replace 
//Bir kelimeyi degistirmek icin kullaniyoruz
console.log(ornek);
console.log(ornek.replace("ipsum","ipsumus"));
//#endregion

//#region Split
//Verdigimiz aralıga gore stringi dilimleyip dizi haline getirir
    console.log(baslik);
    let dizi = baslik.split(" ");
    console.log(dizi);
//#endregion