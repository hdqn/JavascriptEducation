let word = "bu bir deneme yazisidir";
let harf  = prompt("Harfi giriniz");

function findLetter(harf){
    let toplam = 0
    for(let i = 0; i<word.length; i++)
    {
        if(word.charAt(i).toLowerCase() === harf)
        {
            toplam+=1;
        }
    }
    return toplam
}

let sonuc = findLetter(harf)
alert("Harf Sayisi : " + sonuc)