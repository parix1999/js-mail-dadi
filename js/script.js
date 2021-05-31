// Primo esercizio: email
// steps= Creare un input con un prompt e una Array con all'interno
// delle email scritte. Per poi farle iterare in base all'input e controllare da un 
// ciclo for.

var inputEmail = prompt('Ciao inserisci la tua email per vedere se è dentro al nostro database');

var listaEmail = ['gianni@gmail.com', 'marco@yahoo.it', 'edoardo@gmail.com', 'piero@outlook.it', 'giada@libero.it', 'laura@icloud.com'];
// console.log(listaEmail);
// console.log(listaEmail[2]);

check = false;
var outPut = document.getElementById('email');

for (var i = 0; i < listaEmail.length;i++) {
    if (listaEmail[i] === inputEmail) {
        check = true;
    }
}
if (check){
    outPut.innerHTML='Ottimo verrai ricordato '+inputEmail;
}else{
    outPut.innerHTML='Scusa ma non ti abbiamo trovato '+inputEmail;
}

// Secondo esercizio: Dadi

// steps = Creare due variabili in conflitto nel fare il numero più alto
// in base al gioco dei dadi, quindi da 1 a 6.
// Quindi serve sicuramente una funzione per chiamare un numero random da 1 a 6
// per tutte e due le variabili. E una funzione che controlli il numero e stabilisca
// il vincente

var lancioComputer = Math.floor(Math.random()*6) +1 ;
var lancioUtente = Math.floor(Math.random()*6) +1 ;

var dadosOutput = document.getElementById('dadi');

dadosOutput.innerHTML += 'Scelta computer ' + lancioComputer;

dadosOutput.innerHTML += '<br> Scelta utente ' +lancioUtente ;

