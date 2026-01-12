let urun1 ={
    isim : "Monster Abra A5",
    kategori : "Teknoloji",
    fiyat : 20000
}

let urun2 ={
    isim : "Monster Abra A7",
    kategori : "Teknoloji",
    fiyat : 30000
}

let urun3 ={
    isim : "Monster Tulpar",
    kategori : "Teknoloji",
    fiyat : 30000
}

let urunler = [urun1,urun2,urun3];
let filteredproduct = [];
let keyword = prompt("Aramak istediğiniz urunu giriniz : ");

function getFilteredProduct(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(keyword.toUpperCase(),0))
        {
            filteredproduct.push(urun)
        }
    })
}


