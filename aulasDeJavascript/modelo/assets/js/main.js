

//essa função abaixo é responsável para somar ou diminuir a quantidade dos produtos
function process_geral(quant, element){
    var classValue = parseInt(element.parentElement.querySelector('.quanti').value);
    classValue+=quant;
    //console.log(classValue); 
    if(classValue < 1){
        element.parentElement.querySelector("input.quanti").value = 1;
    }else{ 
        element.parentElement.querySelector("input.quanti").value = classValue;    
    }
}  

const preencheDadoCarrinho = (produtoItem, item) => {
carrinho.querySelector('carrinhoItemImg').src = item.img
carrinho.querySelector('.itemPrice').innerHTML = 'R$ ${item.price.toFixed(2)}'
carinho.querySelector('.itemName').innerHTML = item.name
carrinho.querySelector('itemDesc').innerHTML = item.description
}

const preencheDadosModal = (item) => {

    seleciona('')
}











carrinho.querySelector('.carrinho').addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicou no carrinho')

    document.querySelector('.cartItem').style.display = 'flex'
})