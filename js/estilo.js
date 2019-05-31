var result = 0;

function init() {
    var unitPrices = document.querySelectorAll(".vlUnitario");
    var total = document.querySelector("#total");
    unitPrices.forEach(calculaTotais);

let p = document.createElement("p");

p.textContent = result;
total.appendChild(p);

}

function calculaTotais(element, index, lista) {
    var qtds = document.querySelectorAll(".qtd");
    var vlTotal = document.querySelectorAll(".vlTotal")
    
    element = element.textContent.replace("R$ ", "");
    let textReplaced = element.replace(",", ".");

    vlTotal[index].textContent = (parseFloat(textReplaced) * parseInt(qtds[index].textContent));

    result = parseFloat(result) + parseFloat(vlTotal[index].textContent);

}
