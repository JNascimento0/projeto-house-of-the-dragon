const imagens = document.querySelectorAll('.imagem');
const informacoes = document.querySelectorAll('.informacoes');

export class Funcoes {
    
    mostrarInformacoesAtivas(indice) {
        informacoes[indice].classList.add('ativa');
    }
    
    esconderInformacoesAtivas() {
        const informacoesAtiva = document.querySelector('.informacoes.ativa');
    
        informacoesAtiva.classList.remove('ativa');
    }
    
    mostrarImagemAtiva(indice) {
        imagens[indice].classList.add('ativa');
    }
    
    esconderImagemAtiva() {
        const imagemAtiva = document.querySelector('.ativa');
    
        imagemAtiva.classList.remove('ativa');
    }
    
    marcarBotaoSelecionado(botao) {
        botao.classList.add('selecionado');
    }
    
    desativarBotaoSelecionado() {
        const botaoSelecionado = document.querySelector(".selecionado");
    
        botaoSelecionado.classList.remove('selecionado');
    }
}