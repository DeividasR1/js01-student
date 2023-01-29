/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let vardas = "Deividas";
let pavarde = "Rusteika";
let gmetai = 2000;
let dmetai = new Date().getFullYear();
console.log("Aš esu" + "" + vardas + pavarde + "" + "man yra" + (gmetai - dmetai) + "metai");




/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
let gel = Math.round(Math.random() * 4);

let hul = Math.round(Math.random() * 4);

if (gel==0 || hul==0) {
    console.log("dalyba iš nulio negalima")
}

else if(gel > hul){
    console.log(Math.round(gel / hul * 100) / 100)
}




/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
let xx = Math.random() * 25;
let cc = Math.random() * 25;
let vv = Math.random() * 25;
console.log(Math.max(xx,cc,vv));







/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 = Math.floor((Math.random() * 10) + 1);
console.log(kr1)
let kr2 = Math.floor((Math.random() * 10) + 1);
console.log(kr2)
let kr3 = Math.floor((Math.random() * 10) + 1);
console.log(kr3)

if (kr1 + kr2 > kr3) {
    console.log("tai yra trikampis")
}
else {
    console.log("tai nera trikampis")
}
if (kr1 + kr3 > kr2) {
    console.log("tai yra trikampis")
}
else {
    console.log("tai nera trikampis")
}
if (kr2 + kr3 > kr1) {
    console.log("tai yra trikampis")
}
else {
    console.log("tai nera trikampis")
}




/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let pirmas = Math.random() * 2;
console.log(pirmas);
let Antras = Math.random() * 2;
console.log(Antras);
let Trecias = Math.random() * 2;
console.log(Trecias);
let Ketvi = Math.random() * 2;
console.log(Ketvi);



/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
let Penktas = Math.floor((Math.random() * (10) -10));
console.log(Penktas)
let Sestas = Math.floor((Math.random() * (10) -10));
console.log(Sestas)
let Septintas = Math.floor((Math.random() * (10) -10));
console.log(Septintas)






/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/



/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/



/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

