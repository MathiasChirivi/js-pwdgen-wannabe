//Chiedere all'utente il nome 
let nome = prompt("Come ti chiami?")
console.log(`L'utente dichiara di chiamarsi ${nome} `)

//chiedere all'utente il cognome 
let cognome = prompt("Qual'è il tuo cognome?")
console.log(`L'utente dichiara che il suo cognome è ${cognome} `)

//chiedere all'utente il colore preferito
let colore = prompt("Qual'è il tuo colore preferito?")
console.log(`L'utente dichiara che il suo colore preferito è ${colore} `)

//anno Corrente da inserire nella password
let annoCorrente = 2023;

console.log(`password consigliata è ${nome}${cognome}${colore}${annoCorrente}`)

//prende nome cognome colore e anno e li scrive tutti su una riga 
let pass = (`${nome}${cognome}${colore}${annoCorrente}`);
document.getElementById("password").innerText = pass;