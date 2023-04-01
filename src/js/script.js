function buscarInformacoesGitHub(){
    fetch("https://api.github.com/users/lmbdev0220")
    .then(response => response.json())
    .then(data => exibirDadosNaTela(data))
}

function exibirDadosNaTela(data){
    document.getElementById("info").innerHTML = `
    <p>${data.name}</p>
    `
}