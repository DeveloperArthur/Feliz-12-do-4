function erroAlert() {
    alert('Deu erro no meu sistema ~_~ \n e me apaixonei <3');
}

function mostrarImagem(){
    document.getElementById('amorArthur').innerHTML = "";
    var img = document.createElement("IMG");
    var foto = Math.floor(Math.random() * 10);
    img.src = "imgs/"+foto+".jpg";
    document.getElementById('amorArthur').appendChild(img);
}

function mostrarGarotaMaisLinda(){
    document.getElementById('idGarotaMaisLinda').innerHTML = "";
    var img = document.createElement("IMG");
    var foto = Math.floor(Math.random() * 10);
    img.src = "imgs/"+foto+".jpg";
    document.getElementById('idGarotaMaisLinda').appendChild(img);
}

function mostrarHulkSantana(){
    window.location.href = 'hulkSantana.html';
}

function slideFotosCasal(){
    document.getElementById('idFotoCasal').innerHTML = "";
    var img = document.createElement("IMG");
    var foto = Math.floor(Math.random() * (14) + 100);
    img.src = "imgs/"+foto+".jpg";
    document.getElementById('idFotoCasal').appendChild(img);   
}