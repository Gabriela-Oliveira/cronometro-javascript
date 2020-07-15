

var cronometro = (function(){
    var temporizador = document.getElementById('temporizador');

    var ss = 0;
    var mm = 0;
    var hh = 0;
    var cron;

    function iniciar(){
        // Executa uma função a cada x tempos passados no timeout.
        cron =  setInterval(() => {
                    _timer();
                }, 1000);
    }

    function parar(){
        //Serve para parar o setInterval.
        clearInterval(cron);
    }

    function zerar(){
        parar();
        ss=0;
        mm=0
        hh=0;
        _atualizarTempo();
    }

    // setInterval(function(){
    //     console.log('Fui executado')
    // },2000);

    function _timer(){
        ss++;

        if(ss == 60){
            mm++;
            ss= 0;
        }else if(mm == 60){
            hh++;
            mm= 0;
        }
        _atualizarTempo();
    }

    function _atualizarTempo(){
        temporizador.textContent = retornarTempoAtualizado();
    }

    // 00:05:06

    function retornarTempoAtualizado(){

        var segundos = (ss < 10) ? "0" + ss : ss;
        var minutos = (mm < 10) ? "0" + mm : mm;
        var horas = (hh < 10) ? "0" + hh : hh;

        return `${horas}:${minutos}:${segundos}`
    }

    return {
        iniciar,
        parar,
        zerar,
        retornarTempoAtualizado
    }

})()


