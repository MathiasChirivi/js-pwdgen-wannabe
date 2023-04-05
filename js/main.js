//Chiedere all'utente il nome 
let nome = prompt("Come ti chiami?");

//chiedere all'utente il cognome 
let cognome = prompt("Qual'è il tuo cognome?");

//chiedere all'utente il colore preferito
let colore = prompt("Qual'è il tuo colore preferito?");

//anno Corrente da inserire nella password
let annoCorrente = 2023;

//Stampa sul file HTML il nome dall'utente Inserito
let Name = (`Il tuo nome è :${nome}`);
document.getElementById("name").innerText = Name;

//Stampa sul file HTMl il Cognome dall'utente Inserito
let LastName = (`Il tuo Cognome è :${cognome}`);
document.getElementById("lastName").innerText = LastName;

//Stampa sul file HTML il colre preferito dall'utente
let Color = (`Il tuo colore preferito è :${colore}`);
document.getElementById("color").innerText = Color;


//prende nome cognome colore e anno e li scrive tutti su una riga 
let pass = (`La password "consigliata" è : ${nome}${cognome}${colore}${annoCorrente}`);
document.getElementById("password").style.cssText = "background-color:blue; padding: 5px; border-radius:20px";
document.getElementById("password").innerText = pass;