console.log(window);

//Floor Metodu
//Verdiğimiz değerin noktadan önceki tam sayı degerini verir.Noktadan sonraki kısımı atar. 
let a = 3.15

console.log(Math.floor(a));

console.log(Math.ceil(a));
//Ceil Metodu küsürattan sonrasına hiç bakmaksızın bir üst integer sayıya yuvarlar. Round metodu ise en yakın int degerine yuvarlar.
console.log(Math.round(a));

//Max min degerleri de max ve min fonksiyonları ile buluruz.
console.log(Math.max(1,2,3,4,50));

console.log(Math.min(-1,2,3,4,-23));


//Abs Mutlak değer almak icin kullanilir.

console.log(Math.abs(-12));


//sqrt fonksiyonu bir fonksiyonun karekökünü almak icin kullanilir.


console.log(Math.sqrt(169));

//Üslü sayı almak icin pow

console.log(Math.pow(5,3));

//Random metodu 

console.log(Math.random()); // Burda random fonksiyonu sayesinde 0-1 arasında rasgele bir değer döner.

//Eğer bu değeri 100 ile çarparsak 0-100 arasında değer döner. Ama yine de tam sayı değildir bu yüzden belli metodlarla virgülden sonraki değeri atarız.

console.log(Math.floor(Math.random()*100));
