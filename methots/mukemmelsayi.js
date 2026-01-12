function sayimukemmelmi(sayi){
    let toplam = 0
    for(let i = 1; i<= sayi; i++){
        if(sayi%i == 0){
            toplam += i;
        }
    }
    if(toplam == sayi*2)
    {
        console.log(sayi + " sayisi mükemmel bir sayıdır")
    }
    else{
        console.log(sayi + " sayisi mükemmel bir sayı değildir")
    }
}


sayimukemmelmi(45)