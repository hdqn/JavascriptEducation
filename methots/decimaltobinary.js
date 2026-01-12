function toBinary(sayi){
    let binary = "";
    while(true)
    {
        binary+=(sayi%2).toString()
        sayi = Math.floor(sayi/2)
        if(sayi == 1)
        {
            binary += 1;
            break;
        }
    }
    let result = reverse(binary)
    console.log(result);
}

function reverse(binary){
    let reverseBinary = "";
    for(let i = binary.lenght - 1 ; i>= 0; i--)
    {
        reverseBinary += binary.charAt(i)
    }
    return reverseBinary;
}

toBinary(6)