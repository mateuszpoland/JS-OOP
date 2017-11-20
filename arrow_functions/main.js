//z to tzw. funkcja anonimowa "anonymous function" - nie posiada ona nazwy
//, bo gdyby była klasą lub meotdą klasy, to wyglądałaby tak:
//var x = function x(arg){}
/*var x = function(a) {
	return a;
}

var output = x("test argument - returned.");
document.write("<h3>"+output+"</h3>");
*/
//teraz to samo - ta sama  funkcja anonimowa, tyle że zapisana ze strzałką
//najpierw zapisuje nazwe zmiennej, do której zapisuje funkcję, pozniej argumenty i po => kod który ma sie wykonac.
//warto tez zauwazyc, że omijam tutaj słowo 'return'
var x = a => a;

var output = x("Hi");
alert(output);

//gdy funkcja nie przyjmuje zadnych argumentow, to skladnia wyglada tak:
var y = () => {alert("Output of a function");};
y();
//setting multiple parameters
var z = (a,b,c) => a+b+c;
alert(z(2,5,9));

//setTimeout with/without arrow functions
//1. traditional anonymous function
setTimeout(function(){alert("2 seconds has passed");}, 2000);
var time = clearTimeout();
//to samo, tylko z uzyciem funkcji =>
setTimeout(() => {alert(" 2 seconds passed");}, 2000);

//teraz programowanie obiektowe
/*
function Car(){
	this.speed = 0;
	//trzeba było przypisać słowo kluczowe 'this' do zmiennej, bo 
	//this nie mogłoby byc odczytane prez funkcje ANONIMOWA - nawet metode anonimowa wewnatrz klasy
	var self = this;
	setInterval(function(){
		self.speed++;
		document.getElementById("status").innerHTML = self.speed;
	}, 300);
}
var mazda = new Car();
*/

/* kod powyzej zastapie arrow function */
function Car(){
	this.speed = 0;
	setInterval(() => {
		this.speed++;
		 document.getElementById("status").innerHTML = this.speed;
		}, 300)
}
var opel = new Car();