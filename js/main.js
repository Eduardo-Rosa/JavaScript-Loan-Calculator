function calculate(){
    // Pesquisa os elementos de entrada e saída do documento

    var amount = document.getElementById("amount");
    var apr = document.getElementById("apr");
    var years = document.getElementById("years");
    var zipcode = document.getElementById("zipcode");
    var payment = document.getElementById("payment");
    var total = document.getElementById("total");
    var totalinterest = document.getElementById("totalinterest");

//           Obtém a entrada do usuário através dos elementos de entrada. Presume que tudo isso
//           é válido.
//           Converte os juros de porcentagem para decimais e converte de taxa
//           anual para taxa mensal. Converte o período de pagamento em anos
//           para o número de pagamentos mensais.

    var principal = parseFloat(amount.value);
    var interest = parseFloat(apr.value) /100 /12;
    var payments = parseFloat(years.value) * 12;

//           Se o resultado é um número finito, a entrada do usuário estava correta e
//           temos resultados significativos para exibir  

    if(isFinite(monthly)){
//          Preenche os campos de saída, arredondando para 2 casas decimais 
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalinterest.innerHTML = ((monthly * payments)-principal).toFixed(2);

//          Sal4va a entrada do usuário para que possamos recuperá-la na próxima vez que
//          ele visitar
        save(amount.value, apr.value, years.value, zipcode.value);

//          Anúncio: localiza e exibe financeiras locais, mas ignora erros de rede
        try{
//          Captura quaisquer erros que ocorram dentro destas chaves 
            getLenders(amount.value, apr.value, years.value, zipcode.value);
        }catch(e){ /*Ignora esses erros*/ }
//           Por fim, traça o gráfico do saldo devedor, dos juros e dos pagamentos do capital
        chart(principal,    interest,   monthly,    payments);
        }else{
//          O resultado foi Not-a-Number ou infinito, o que significa que a entrada
//          estava incompleta ou era inválida. Apaga qualquer saída exibida anteriormente.
            payment.innerHTML = ""; //Apaga o conteúdo desse elemento
            total.innerHTML = "";
            totalinterest.innerHTML = "";
            chart(); // Sem argumentos, apaga o gráfico
    }

}

//           Salva a entrada do usuário como propriedades do objeto localStorage. Essas
//           propriedades ainda existirão quando o usuário visitar no futuro
//           Esse recurso de armazenamento não vai funcionar em alguns navegadores (o Firefox, por
//           exemplo), se você executar o exemplo a partir de um arquivo local:// URL. Contudo,
//           funciona com HTTP.
