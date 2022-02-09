function start() { // Inicio da função start()

    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //Principais variaveis do jogo

    var jogo = {};
    var TECLA = {
        W: 87,
        S: 83,
        D: 68
    };
    jogo.pressionou = [];

    //Verifica se o usuario pressionou alguma tecla	

    $(document).keydown(function(e) {
        //'e' indica o evento de tecla pressionada e which indica o codigo da tecla pressionada
        jogo.pressionou[e.which] = true;
    });


    $(document).keyup(function(e) {
        jogo.pressionou[e.which] = false;
    });

    //Game Loop

    jogo.timer = setInterval(loop, 30);

    function loop() {

        movefundo();
        movejogador();

    } // Fim da funcao loop()

    //Funcao que movimenta o fundo do jogo

    function movefundo() {

        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position", esquerda - 1);

    } // fim da funcao movefundo()

    function movejogador() {

        if (jogo.pressionou[TECLA.W]) {
            var topo = parseInt($("#jogador").css("top"));
            if (topo <= 0) { //limita o alcance do helicoptero para cima
                // $("#jogador").css("top", topo + 10); //aqui ele volta 10px mas da efeito tremido
                !(jogo.pressionou[TECLA.W]); //desativa tecla w
            } else {
                $("#jogador").css("top", topo - 10);
            }
        }

        if (jogo.pressionou[TECLA.S]) {
            var topo = parseInt($("#jogador").css("top"));
            if (topo >= 434) { //limita o alcance do helicoptero para baixo
                // $("#jogador").css("top", topo - 10); //aqui ele volta 10px mas da efeito tremido
                !(jogo.pressionou[TECLA.S]); //desativa tecla s
            } else {
                $("#jogador").css("top", topo + 10);
            }
        }

        if (jogo.pressionou[TECLA.D]) {

            //Chama funcao Disparo	
        }

    } // fim da funcao movejogador()

} // Fim da função start