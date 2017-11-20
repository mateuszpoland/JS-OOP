/* metody i atrybuty obiektu WebStorage (localstorage)
length - atrybut
metody:
clear()
key()
getItem()
setItem()
removeItem()
dostepne w localstorage miejsce to ok 5MB
*/
//1. Najpierw rożnica miedzy session storage a local storage
//w nawiasach są pary klucz-wartość, czyli username jest kluczem, a "George" wartością.
//alternatywnie mozna to ustawić:
//localStorage.username = "George"
//localStorage.setItem("username", "George");
//sessionStorage.setItem("username", "Brad");

localStorage.clear();
localStorage.setItem("username", "George");
localStorage.setItem("country", "USA");
localStorage.setItem("color", "white");