let listaAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    if (listaAmigos.includes(nomeAmigo)) {
        alert(`O nome ${nomeAmigo} já está na lista de amigos.`);
    } else {
        listaAmigos.push(nomeAmigo);
    }
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let elementListaAmigos = document.getElementById('lista-amigos');
    let listaAmigosHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        if (i === 0) {
            listaAmigosHTML += listaAmigos[i];
        } else {
            listaAmigosHTML += ", " + listaAmigos[i];
        }
    }
    elementListaAmigos.innerHTML = listaAmigosHTML;
}

function sortear() {
    embaralha(listaAmigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaAmigos.length; i++) {
        listaSorteio.innerHTML += listaAmigos[i] + ' --> ' + listaAmigos[(i + 1) % listaAmigos.length] + '<br>';
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}



function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio  ').innerHTML = '';
}