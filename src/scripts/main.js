AOS.init();

const dataDoEvento = new Date("Sep 02, 2026 19:00:00").getTime(); // essa funcao pega a data e hora do evento e converte para milissegundos desde 1970-01-01T00:00:00Z (Unix Epoch Time)

const contador = setInterval(function() { // a funcao setInterval executa a funcao a cada 1000 milissegundos (1 segundo)
    const agora = new Date().getTime(); // essa funcao pega a data e hora atual e converte para milissegundos desde 1970-01-01T00:00:00Z (Unix Epoch Time)
    const distancia = dataDoEvento - agora; // a variavel distancia calcula a diferenca entre a data do evento e a data atual, resultando no tempo restante em milissegundos

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs = 1000;

    const dias = Math.floor(distancia / diasEmMs); // aqui dividimos a distancia pelo numero de milissegundos em um dia para obter o numero de dias restantes, e usamos Math.floor para arredondar para baixo
    const horas = Math.floor((distancia % diasEmMs) / horasEmMs); // aqui usamos o operador de modulo (%) para obter o resto da divisao da distancia pelos milissegundos em um dia, que nos da o tempo restante apos contar os dias completos, e depois dividimos esse valor pelos milissegundos em uma hora para obter o numero de horas restantes, e usamos Math.floor para arredondar para baixo
    const minutos = Math.floor((distancia % horasEmMs) / minutosEmMs); // aqui usamos o operador de modulo (%) para obter o resto da divisao da distancia pelos milissegundos em uma hora, que nos da o tempo restante apos contar as horas completas, e depois dividimos esse valor pelos milissegundos em um minuto para obter o numero de minutos restantes, e usamos Math.floor para arredondar para baixo
    const segundos = Math.floor((distancia % minutosEmMs) / segundosEmMs); // aqui usamos o operador de modulo (%) para obter o resto da divisao da distancia pelos milissegundos em um minuto, que nos da o tempo restante apos contar os minutos completos, e depois dividimos esse valor pelos milissegundos em um segundo para obter o numero de segundos restantes, e usamos Math.floor para arredondar para baixo

    document.getElementById("contador").innerHTML = `começa em ${dias}d ${horas}h ${minutos}m ${segundos}s`; // aqui selecionamos o elemento com id "contador" e atualizamos seu conteudo HTML para exibir o tempo restante formatado como "Xd Xh Xm Xs"

    // se a distancia for menor que 0, significa que o evento ja comecou, entao paramos o contador e exibimos uma mensagem
    if (distancia < 0) {
        clearInterval(contador); // a funcao clearInterval para o contador, ou seja, para de executar a funcao a cada segundo
        document.getElementById("contador").innerHTML = "já começou!";
    }
}, 1000);