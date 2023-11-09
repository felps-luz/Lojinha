const itensCarrinho = {}

function addCarrinho(itemNome, itemPreco){
    if(itensCarrinho[itemNome]){
        itensCarrinho[itemNome].quantidade++

        itensCarrinho[itemNome].precoTotal += itemPreco
        
        itensCarrinho[itemNome].liItem.querySelector(".quantidade").innerHTML= itensCarrinho[itemNome].quantidade
        itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$"+ itensCarrinho[itemNome].precoTotal.toFixed(2)
    }
    else{
        const liItem = document.createElement("li")
        liItem.innerHTML = `     <div class="item">
        <span>${itemNome}</span>
        <button class="remove" onclick="removeCarrinho('${itemNome}', ${itemPreco})">-</button>
        <span class="quantidade">1</span>
        <button class="add" onclick="addCarrinho('${itemNome}', ${itemPreco})">+</button>
        <span class="preco-total">R$${itemPreco.toFixed(2)}</span>
    </div>`
    document.getElementById("itens-lista").appendChild(liItem)

    itensCarrinho[itemNome] = {
        quantidade: 1,
        precoTotal: itemPreco,
        liItem: liItem
        }
    }
    let precoTotal = 0
    for(let itemNome in itensCarrinho){
        precoTotal += itensCarrinho[itemNome].precoTotal
    }
    document.getElementById('preco-total').innerHTML = "Total R$" +precoTotal.toFixed(2)
    updateCarrinho()
}

function removeCarrinho(itemNome, itemPreco){
    if(itensCarrinho[itemNome]){
        if(itensCarrinho[itemNome].quantidade > 1){
            itensCarrinho[itemNome].quantidade-- 
            itensCarrinho[itemNome].precoTotal -= itemPreco
            itensCarrinho[itemNome].liItem.querySelector(".quantidade").innerHTML = itensCarrinho[itemNome].quantidade
            itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$"+itensCarrinho[itemNome].precoTotal.toFixed(2)
        }
        else{
            document.getElementById("itens-lista").removeChild(itensCarrinho[itemNome].liItem)
            delete itensCarrinho[itemNome]
        }
        document.getElementById("preco-total").innerHTML = "Total R$" +precoTotal.toFixed(2)
        updateCarrinho()
    }

}
function updateCarrinho(){
    let cont = 0 
    for(let item in itensCarrinho){
        cont += itensCarrinho[item].quantidade
    }
    document.getElementById("cont-carrinho").innerHTML = cont
}

function limparCarrinho(){
    
    document.getElementById("itens-lista").innerHTML=""
    document.getElementById("preco-total").innerHTML="valor Total: R$ 0.00"

    for (let itemNome in itensCarrinho){
        delete itensCarrinho[itemNome]
    }
    updateCarrinho()
}
function toggleCarrinho(){
    const itensCarrinhoDiv= document.getElementById("carrinho-itens")
    if(itensCarrinhoDiv.style.display === "none"){
        itensCarrinhoDiv.style.display = "block"
    } else{
        itensCarrinhoDiv.style.display = "none"
    }
}
function buscarRaca(){
    const buscarInput = document.getElementById("buscar-input")
    const raca= document.getElementsByClassName("raca")

    for(let i = 0; i<raca.length; i++){
        const racaNome = raca[i].querySelector("h3").innerText.toLowerCase()

        if(racaNome.includes(buscarInput.value.toLowerCase())){
            raca[i].style.display= "block"
        } else{
            raca[i].style.display = "none"
        }
    }
}