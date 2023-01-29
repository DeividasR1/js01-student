let num = 6 + 4;
let vcs = "Labanaktis";
let relationship = (vcs == num);

console.log(num + ", " + vcs + ", " + typeof(vcs) + ", " + relationship);
console.log(`${num}, ${vcs}, typeof(${vcs}), ${relationship}`);

let vrd = "Deividas";
let pav = "Pa";
let friday = vrd + " " + pav;
console.log(friday);

let x = 5;
let y = "5";

if(x === y) {
    console.log("lygu")
} else{
    console.log("nelygu")
}

console.log(x + y);

console.log(vcs.length);

let tekstas = "pirmas";
console.log(tekstas.length);
console.log(tekstas.toUpperCase());
console.log(tekstas.toLowerCase());
console.log(tekstas.charAt(3));
console.log(tekstas.indexOf("m"));

tekstas = "Cia gali buti jusu reklama";
console.log(tekstas.replace("gali buti", "yra"));
console.log(tekstas.substring(4, 14));
console.log(tekstas.substring(14));
console.log(tekstas.substr(4, 9));

x = 6.74;
console.log(Math.round(x));
console.log(Math.ceil(x));
console.log(Math.floor(x));

y = 5.8;
let z = 9;
console.log(Math.max(x, y, z));
console.log(Math.min(x, y, z));

let i =Math.round(Math.random() * 30);
console.log(i);

let a = Math.floor( Math.random() * (50 - 10 + 1) + 10)
console.log(a);


let num1 = 1;
while(num1 <= 10){
    console.log(num1);
    num1++;
}

let suma = 0;
for(let t = 1; t <= 10; t++) {
    suma + t;
}

console.log(suma);

//suma = 0, 1, 3, 6, 10, 15, 21, 28, 45, 55

// t = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 

suma = 0;
let skaiciai = [10, 20, 30, 40, 50, 60, 70, 80]
for(let w = 0; w < skaiciai.length; w++){
    suma = suma + skaiciai[w];
}

console.log(suma);


if(4 < 7 && 11 < 10){
    console.log("Labas")
}


//alert("You have a virus!");
//confirm("Ar tikrai nori atidaryti?");
//prompt("Koks tavo vardas?")



function sumOfCubes(a, b) {
    return a * a * a + b * b * b;
}

let mySum = sumOfCubes(4, 9);
console.log(mySum)

function hello() {
    console.log("Hello World");
}

document.getElementById("heading").innerText = "Labas";
document.getElementById("newText").innerHTML = "<h3> Sveiki visi</h3>";

function ShowMore() {
    document.getElementById("Daugiau").innerHTML = "Javascript paskaita";
}

let studentai = ["Algis", "Alex", "Deividas", "Laurynas"];
for(let i = 0; i < studentai.length; i++) {
    if(i % 2 == 0) {
    console.log(studentai[i]);
    }
}

console.log(studentai[2]);
studentai[2] = "Tomas";
console.log(studentai[2]);
studentai.pop("Algis");
console.log(studentai);
studentai.push("Lukas");
console.log(studentai);

let pienoproduktai = ["pienas", "suris", "kefyras"];
let kitiproduktai = ["sausainiai", "kruopos", "alus"];
let produktai = [pienoproduktai, kitiproduktai];
console.log(produktai);
console.log(produktai[1][1]);

let numberList = [2,3,5,8,4,7,6,9,1,12];
let lyginiuKiekis = 0;
for(let i = 0; i < numberList.length; i++) {
    if(numberList[i] % 2 == 0) {
        lyginiuKiekis++;
    } else {
        numberList[i] = undefined;
    }
}
console.log(lyginiuKiekis);
console.log(numberList);
