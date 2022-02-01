//armazena a url da API de gatos em uma constante como boa pratica.
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
//essas constante são os elementos no DOM do botão que muda a imagem e da imagem do gato.
const CAT_BTN = document.getElementById('change-cat');
const CAT_IMG = document.getElementById('cat');

//cria na const GET_CATS uma função assincrona que aguarda (await) o resultado de um função fetch para a API de gatos. Depois cria outra const que armazena o resultado da API no formato json.
const GET_CATS = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
//url é a chave dentro do objeto da api que queremos acessar, que contem a url da imagem do gato      
        return json.url;
    }
    catch(erro){console.log(erro.message)};
};

//essa função espera o resultado da função GET_CATS e armazena na const do elemento DOM da imagem.
const LOAD_IMG = async () => {
    CAT_IMG.src = await GET_CATS();
}

//Aqui é associada a função LOAD_IMG ao botao no evento click, e é chamada tambem ao carregar a página. 
CAT_BTN.addEventListener('click', LOAD_IMG);
LOAD_IMG();