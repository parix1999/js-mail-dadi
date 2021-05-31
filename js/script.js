// esercizio email
// steps= Creare un input con un prompt e una Array con all'interno
// delle email scritte. Per poi farle iterare in base all'input e controllare da un 
// ciclo for.

var inputEmail = prompt('Ciao inserisci la tua email per vedere se è dentro al nostro database');

var listaEmail = ['gianni@gmail.com', 'marco@yahoo.it', 'edoardo@gmail.com', 'piero@outlook.it', 'giada@libero.it', 'laura@icloud.com'];
// console.log(listaEmail);
// console.log(listaEmail[2]);

check = false;
var outPut = document.getElementById('email-result');

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