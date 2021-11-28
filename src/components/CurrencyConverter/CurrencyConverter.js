import AddCss from '../../utils/addCss.js'

// const moneyIcon = 

var options1 = ["BRL", "USD", "EUR", "BIT", "ETC"]
var options2 = ["BRL", "USD", "EUR", "BIT", "ETC"]

function getDate(){
    let d = new Date();
    let dia = d.getDate();
    let mes = d.getMonth() +1;
    let ano = d.getFullYear();

    let dataCompleta = ano+'-'+mes+'-'+dia;
    console.log("\n\nData completa:",dataCompleta);

    return dataCompleta;
}

function dollarExchange(data){
    const request = new XMLHttpRequest()
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent('https://www3.bcb.gov.br/bc_moeda/rest/cotacao/fechamento/ultima/1/220/2021-11-24')}`
    request.open("GET", url)
    request.send()

    request.onload = (e) => {
        if(request.responseText){
            var string = JSON.stringify(request.responseText)
            string = string.replace(/\s+/g, '');

            var i1 = string.search('<taxaCompra')
            string1 = string.substr(i1)
            var i2 = string.search('<taxaVenda')
            string2 = string.substr(i2)

            var subString1 = string1.substr(
            string1.indexOf(">") + 1,
            string1.lastIndexOf("</taxaCompra>")
            );
            var subString2 = string2.substr(
            string2.indexOf(">") + 1,
            string2.lastIndexOf("</taxaVenda>")
            );

            var taxaCompra = subString1.substring(0,10);
            var taxaVenda = subString2.substring(0,10);

            console.log("\nTaxa de Compra:",taxaCompra);
            console.log("\nTaxa de Venda:",taxaVenda);

            var cambioDollar = (taxaVenda+taxaCompra)/2

            return cambioDollar;
        }
    }
}

function euroExchange(data){
    const request = new XMLHttpRequest()
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent('https://www3.bcb.gov.br/bc_moeda/rest/cotacao/fechamento/ultima/1/978/2021-11-24')}`
    request.open("GET", url)
    request.send()

    request.onload = (e) => {
        if(request.responseText){
            var string = JSON.stringify(request.responseText)
            string = string.replace(/\s+/g, '');

            var i1 = string.search('<taxaCompra')
            string1 = string.substr(i1)
            var i2 = string.search('<taxaVenda')
            string2 = string.substr(i2)

            var subString1 = string1.substr(
            string1.indexOf(">") + 1,
            string1.lastIndexOf("</taxaCompra>")
            );
            var subString2 = string2.substr(
            string2.indexOf(">") + 1,
            string2.lastIndexOf("</taxaVenda>")
            );

            var taxaCompra = subString1.substring(0,10);
            var taxaVenda = subString2.substring(0,10);

            console.log("\nTaxa de Compra:",taxaCompra);
            console.log("\nTaxa de Venda:",taxaVenda);

            var cambioEuro = (taxaVenda+taxaCompra)/2

            return cambioEuro;
        }
    }
}


const CurrencyConverter = () => {
    AddCss('./src/components/CurrencyConverter/CurrencyConverter.css')
    const container = document.getElementById('currency')
  
    const currencyIcons = document.createElement('div')
    currencyIcons.classList.add('toolbelt-converter-icons-container')
  
    const firstInfo = document.createElement('div')
    firstInfo.innerHTML = "<p>USD<p>"
    const secondInfo = document.createElement('div')
    secondInfo.innerHTML = "<p>EUR<p>"
    // const moneyIcon = document.createElement('div')
    // moneyIcon.innerHTML = 
    
}  