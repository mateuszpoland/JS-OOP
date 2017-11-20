
//tworze nowa klase obslugujaca ruch obrotowy
var rotateGear = function()
{
	//atrybuty klasy
	this.d = 0;
	//metody klasy
	this.animate = function animate(el,dir)
	{
		var elem = document.getElementById(el)
		//this bedzie czymś, na rzecz czego bedziemy wywoływac metode - np img, div itp.
		var me = this;
		//okreslam warunki obrotu kólek - zgodnie i przeciwnie do ruchu wskazówek zegara
		if(dir == "ccw")
		{
			//zmniejsz kąt
			this.d--;
		}
		//jeżeli "cw" to bedzie sie obracalo zgodnie
		else if (dir == "cw") {this.d++;}
		//własciwa animacja z pomoca -webkit-transform
		elem.style.WebkitTransform = "rotate("+this.d+"deg)";
		elem.style.MozTransform = "rotate("+this.d+"deg)";
		//żeby stopnie obrotu nie leciały w nieskonczonosc, to po soiagnieciu 359st, zaczynamy od 1
		if(this.d > 359){this.d = 1;}
		else if(this.d <-359) {this.d = -1};
		
		//na koniec uzywam funkcji setTimeOut, która bedzie wykonywała funckję animate() co 20ms
	
		setTimeout(function() {me.animate(el,dir);}, 20);
	}
	
}
