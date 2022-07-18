const controles = document.querySelectorAll("[data-controle]");                                //SELECIONAR TODOS OS BOTOES DE SUBTRARIR OU SOMAR
const estatisticas = document.querySelectorAll("[data-estatistica]");                          //SELECIONAR TODOS OS DADOS DA DASHBOARD ESTASTITICAS

const pecas = {                                                                                //ARRAY DE OBJETOS
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },

    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },

    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },

    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

function handleClick() {                                                                       //FUNÇÃO DE TRATAMENTO DE CLICK
    controles.forEach(element => {                                                             //NAVEGA POR CADA UM DOS ELEMENTOS DO ARRAY DE CONTROLES ENCOTNRADOS
        element.addEventListener("click", event => {                                           //ESSE ELEMENTO RECEBE UM ESCUTADOR DE EVENTO QUE EXECUTA DUAS FUNÇÕES AO CLICK
            atualizaValores(event.target.dataset.controle, event.target.parentNode);           //FUNÇÃO QUE ATUALIZA VALORES DO PAINEL, QUE RECEBE A OPERACAO E O BLOCO PAI
            atualizaEstatisticas(event.target.dataset.peca, event.target.dataset.controle);    //FUNÇÃO QUE ATUALIZA ESTATISTICAS, QUE RECEBE A PECA E O CONTROLE
        })
    })
}


function atualizaValores(operacao, controle) {                                                 //RECEBE OPERACAO E O CONTROLE CLICADOS
    const parteRobo = controle.querySelector("[data-contador]");                               //DETERMINA QUE PARTE DO ROBO RECEBE O CONTADOR ESPECIFICO

    if (operacao === "+") parteRobo.value++                                                    //SE A OPERACAO FOR + SOMO 1 NA PARTE DO CORPO 
    if (operacao === "-") parteRobo.value--;                                                   //SE A OPERACAO FOR - SUBTRAI 1 NA PARTE DO CORPO
}

function atualizaEstatisticas(peca, operacao) {                                                //RECEBE A PECA CLICADA E A OPERACAO
    estatisticas.forEach(element => {                                                          //NAVEGA POR CADA UM DOS ELEMENTOS 
        if (operacao === "+") element.innerHTML = +element.innerHTML + pecas[peca][element.dataset.estatistica]; //SE A OPERAÇÃO FOR DE + ELE RECEBE DO ARRAY PECAS, A PECA CLICADA, QUAL O TIPO DE ESTASTITICA DEVE SER SOMADA
        if (operacao === "-") element.innerHTML = +element.innerHTML - pecas[peca][element.dataset.estatistica]; //SE A OPERAÇÃO FOR DE - ELE RECEBE DO ARRAY PECAS, A PECA CLICADA, QUAL O TIPO DE ESTASTITICA DEVE SER SUBTRAIDA
    })
}

handleClick();