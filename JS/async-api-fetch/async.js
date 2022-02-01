// Criada promise que é cumprida após um timeout de tres segundos.
async function resolvePromessa() {
    console.log('Aguarde três segundos para a promessa se cumprir...\n')
    const PROMESSA = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolvida!');
        }, 3000);
    });

// Aqui é criada a const RESOLVIDA que aguarda o resultado da promise PROMESSA e então (.then) concatena com mais duas strings e exibe no console. No caso de erro, exibe a msg do erro pelo .catch
    const RESOLVIDA = await PROMESSA
        .then((resultado) => resultado + ' Passando pelo then...')
        .then((resultado) => resultado + ' E agora acabou!')
        .catch((erro) => console.log(erro.message));

    return console.log(RESOLVIDA);
   
}
//no final a função é chamada para execução.
resolvePromessa();    

