let listaAmigos = [];
let listaAmigosElement = document.getElementById('listaAmigos');
let resultadoElement = document.getElementById('resultado');

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        input.value = '';
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = '';
    input.focus();
}

function atualizarLista() {
    listaAmigosElement.innerHTML = '';
    listaAmigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = amigo;

        let btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.classList.add('button-remove');
        btnRemover.setAttribute('aria-label', `Remover ${amigo}`);
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        listaAmigosElement.appendChild(li);
    });
}

function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um nome para realizar o sorteio.');
        return;
    }

    // Sorteia um nome aleatório
    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    // Limpa a lista de amigos da interface
    listaAmigos.length = 0;
    listaAmigosElement.innerHTML = '';

    // Exibe apenas o nome sorteado
    exibirResultado([sorteado]);
}

function exibirResultado(resultado) {
    resultadoElement.innerHTML = '';
    resultado.forEach((nome) => {
        let li = document.createElement('li');
        li.textContent = nome;
        resultadoElement.appendChild(li);
    });
}
