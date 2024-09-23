document.addEventListener('DOMContentLoaded', function() {
    var preco = 35.91; // Defina o preço corretamente

    document.getElementById('plus').addEventListener('click', function() {
        var quantityInput = document.getElementById('quantity');
        var currentQuantity = Number(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
        updateTotal();
    });

    document.getElementById('menos').addEventListener('click', function() {
        var quantityInput = document.getElementById('quantity');
        var currentQuantity = Number(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
            updateTotal();
        }
    });

    document.getElementById('finish').addEventListener('click', function() {
        var total = document.getElementById('resultTotal').innerText.replace('Total: R$ ', '').replace(',', '.');
        var totalParam = encodeURIComponent(total);
        window.open(`total.html?total=${totalParam}`, "_blank");
    });

    function updateTotal() {
        var quantidade = Number(document.getElementById('quantity').value);
        var total = quantidade * preco;
        document.getElementById('resultTotal').innerText = `Total: R$ ${total.toFixed(2)}`;
    }

    // Inicialize o total ao carregar a página
    updateTotal();
});
