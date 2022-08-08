var x = 0.1 + 0.2;
console.log(x.toFixed(1));

var y = "1";
var z = 2;
console.log(Number(y)+z);

var memory = prompt("indicate the total memory on the flash drive");
var files = (memory/820) ;
alert(files.toFixed() + " files can fit on a flash drive");

var sum = prompt("money in wallet");
var price = prompt("chocolate price");
var chocolates = sum / price;
var rest = sum % price;
alert("you can buy " + chocolates.toFixed() + " chocolates, you will have " + rest + " rest");

var numb = prompt("enter a three-digit number");
var firstNumb = (numb%10);
var secNumb = ((numb%100)/10);
var thirdtNumb = ((numb%1000)/100);
/*alert(firstNumb);
alert(Math.floor(secNumb));
alert(thirdtNumb.toFixed());*/

alert(firstNumb.toFixed() + Math.floor(secNumb) + Math.floor(thirdtNumb).toFixed());

var deposit = prompt("enter deposit amount");
var percentage = (deposit*((0.05/12)*2));
alert(percentage.toFixed(3));



console.log(typeof 2 && 0 && 3); // 0
console.log(typeof 2 || 0 || 3); // 2
console.log(typeof 2 && 0 || 3); // 3
