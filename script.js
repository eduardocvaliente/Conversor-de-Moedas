const convertButton = document.querySelector("#button-convert")  //Seleciona o botão "Converter"
const currencySelect = document.getElementById("para")
const currencyOf = document.getElementById("de")



function convertValues(){  //Função para converter
    const valueEntered = document.getElementById("valor").value  //Seleciona o valor digitado no input
    const currencyValueToConvert = document.getElementById("real-result")  //valor Real
    const currencyValueConverted = document.getElementById("result-bottom")  //Valor outras moedas

    const dolarToday = 5.39  //Cotação do dólar
    const euroToday = 6.50  //Cotação do euro
    const libraToday = 7.50  //Cotação da libra

    const convertedValue = valueEntered / dolarToday  //Converte o valor digitado para dólar
                //   valor digitado dividido pelo dolar atual

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {  //Formata o valor para o formato americano
            style: "currency",
            currency: "USD"
        }).format(valueEntered / dolarToday)
    }
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {  //Formata o valor para o formato americano
            style: "currency",
            currency: "EUR"
        }).format(valueEntered / euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {  //Formata o valor para o formato americano
            style: "currency",
            currency: "GBP"
        }).format(valueEntered / libraToday) 
    }
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {  //Formata o valor para o formato brasileiro
        style: "currency",
        currency: "BRL"
    }).format(valueEntered)

}

function changeCurrency() {
    const currencyName = document.getElementById("moeda-descricao")
    const currencyImage = document.querySelector("#imagem-moeda")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    
    

    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)
currencyOf.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)  //Adiciona o evento de clique ao botão
                                    // Quando clicar no botão ele aciona a função "convertValues"
console.log(convertButton)