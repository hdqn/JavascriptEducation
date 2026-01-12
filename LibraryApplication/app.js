let book1 = {
    name : "Efsane",
    writer : "Iskender Pala",
    price : 150,
    shelf : "1.5.Raf"
}
let book2 = {
    name : "Hicbir Karsilasma Tesaduf Degildir",
    writer  : "Hakan Menguc",
    price : 200,
    shelf : "2.3.Raf"
}

let book3 = {
    name : "Insan Ne ile Yasar",
    writer : "Tolstoy",
    price : 200,
    shelf : "3.4.Raf"
}

let book4 = {
    name :  "Zafer Sizlanarak Kazanilmaz",
    writer : "Haluk Tatar",
    price :  180,
    shelf : "4.1.Raf"
}

let book5 = {
    name : "Seker Portakali",
    writer : "Jose Mauro de Vasconcelos",
    price : 200,
    shelf : "5.3.Raf"
}

let books = [book1,book2,book3,book4,book5];

let shelf11 = {code : "1.1.Raf", show : false}
let shelf12 = {code : "1.2.Raf", show : false}
let shelf13 = {code : "1.3.Raf", show : false}
let shelf14 = {code : "1.4.Raf", show : false}
let shelf15 = {code : "1.5.Raf", show : false}

let shelf21 = {code : "2.1.Raf", show : false}
let shelf22 = {code : "2.2.Raf", show : false}
let shelf23 = {code : "2.3.Raf", show : false}
let shelf24 = {code : "2.4.Raf", show : false}
let shelf25 = {code : "2.5.Raf", show : false}

let shelf31 = {code : "3.1.Raf", show : false}
let shelf32 = {code : "3.2.Raf", show : false}
let shelf33 = {code : "3.3.Raf", show : false}
let shelf34 = {code : "3.4.Raf", show : false}
let shelf35 = {code : "3.5.Raf", show : false}

let shelf41 = {code : "4.1.Raf", show : false}
let shelf42 = {code : "4.2.Raf", show : false}
let shelf43 = {code : "4.3.Raf", show : false}
let shelf44 = {code : "4.4.Raf", show : false}
let shelf45 = {code : "4.5.Raf", show : false}

let shelf51 = {code : "5.1.Raf", show : false}
let shelf52 = {code : "5.2.Raf", show : false}
let shelf53 = {code : "5.3.Raf", show : false}
let shelf54 = {code : "5.4.Raf", show : false}
let shelf55 = {code : "5.5.Raf", show : false}

let shelfes =  [
    [shelf51,shelf52,shelf53,shelf54,shelf55],
    [shelf41,shelf42,shelf43,shelf44,shelf45],
    [shelf31,shelf32,shelf33,shelf34,shelf35],
    [shelf21,shelf22,shelf23,shelf24,shelf25],
    [shelf11,shelf12,shelf13,shelf14,shelf15],
];

function createShelf(){
    console.clear();
    let line = "";
    for (let i = 0; i < shelfes.length; i++) {
        for (let j = 0; j < 5; j++) {
            line+="|"+ (shelfes[i][j].show ? shelfes[i][j].code : "---") +"";
        }
        console.log(line);
        console.log("--------------------");
        line = "";
    }
}

function findCode(bookName){
    let shelfCode = null;
    books.forEach(function(book){
        if(book.name.toUpperCase().includes(bookName.toUpperCase(),0))
        {
            shelfeCode = book.shelf;
        }
    });
    return shelfeCode;
}

function showInShelf(shelfCode){
    for (let i = 0; i < shelfes.length; i++) {
        for (let j = 0; j < 5; j++) {
            if(shelfes[i][j].code == shelfCode)
            {
                shelfes[i][j].show = true;
                break;
            }
        }
    }
}

createShelf();

let bookName = prompt("Lutfen bir kitap ismi giriniz : ");
let shelfCode = findCode(bookName);

if(shelfCode!= null)
{
   showInShelf(shelfCode);
   createShelf();
}
else
{
    alert("Girdiğiniz Kitap Kütüphanemizde Bulunmamaktadır.");
}