//1. Deklaracja klasy przez deklarację funkcji
function Player()
{
	//2. ustawienie atrybutów
	this.name;
	this.hitpoints = 100;
	//3. utworzenie metod
	this.attack = function attack(opponent)
	{
		opponent.hitpoints -= 10;
		//opponent jest dynamicznym argumentem - bo bedzie nim cały obiekt, dlatego moge 
		//w ponizszej instrukcji odwołać się do jego atrybutu
		alert(this.name+" przyjebał "+opponent.name);
	}
}

//4. tworze nowe obiekty klasy Player
var p1 = new Player();
var p2 = new Player();
//5. ustawiam im atrybuty 
p1.name = "Pudzian";
p2.name = "Popek";
//6. wywoluje na obiekcie p1 metodę attack() - Pudzian atakuje Popka
p1.attack(p2);
alert(p2.name+" oberwał i zostało mu "+p2.hitpoints+" punktów życia!");

//7. teraz, używając Prototype, utworzę metodę "leczącą" (jeden gracz ulecza drugiego)
Player.prototype.heal = function heal(targetPlayer)
{
	targetPlayer.hitpoints += 5;
}
//8. utworze takze metode "self-healing"
Player.prototype.selfHeal = function()
{
	//metoda ta sprawi, że hitpointy wroca do stanu poczatkowego
	this.hitpoints = 100;
}

//9. teraz Pudzian uleczy troche Popka, dajac mu odpoczac:
p1.heal(p2);
alert(p1.name+" w swej łaskawosci, uleczył "+p2.name+" ,który ma teraz "+p2.hitpoints+" punktów życia..");

//10. prototypow mozna uzyc takze do tworzenia nowych atrybutow
Player.prototype.energy = 100; 
alert("Energia: "+p1.energy);