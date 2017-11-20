//1. Utworzenie klasy defaultowej, która bedzie "rodzicem"
var ParentClass = function()
{
	this.parent_property1 = "Witaj!";
	//2. dodajemy metode, która bedzie przyjmowala dowolna ilosc dynamicznych argumentów
	this.parentmethod1 = function parentmethod1(parent_argument)
	{
		return "Parentmethod 1 returned"+parent_argument;
	}
}

//klasa dziedzicząca "child class"
var ChildClass = function(){
	this.child_property = "Do widzenia!";
	this.childmethod1 = function childmethod1(child_argument){
		return "Child method returned"+child_argument;
	}
}

//Aby klasa dziecko dziedziczyła wszystkie atrybuty i metody klasy rodzica,
// trzeba użyc po prostu prototypów.
ChildClass.prototype = new ParentClass();
//teraz, by to sprawdzic, utworze nowy obiekt klasy ChildClass
var child1 = new ChildClass();
/*teraz, wywołam funkcje typu boolean, by sprawdzic, czy nowy obiekt jest zarówno typu
//ParentClass jak i ChildClass
alert(child1 instanceof ParentClass);
alert(child1 instanceof ChildClass);

//teraz wykorzystam wlasciwosc dziedziczenia, czyli dostep klasy dziecka do atrybutow rodzica
alert("Najpierw mowie: "+child1.parent_property1+" a pozniej "+child1.child_property); 
*/
/*
alert(child1.parentmethod1("PARENT")+child1.childmethod1("CHILD"));
*/

//////////////////////////////////////////////////////
// Klasa dziedziczaca może przysłonić metodę klasy rodzica w JS:
ChildClass.prototype.parentmethod1 = function parentmethod1(){
	return "parentmethod1 was succesfully overriden";
}
alert(child1.parentmethod1());