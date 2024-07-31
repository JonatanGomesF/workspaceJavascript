document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#formulario');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputCanecas = e.target.querySelector('#qtd');
        const inputCor = e.target.querySelector('#cores');
        const modelo = e.target.querySelector('#modelo');
        
        const canecas = Number(inputCanecas.value);
        const cor = inputCor.value;
        const model = modelo.value;

        function getCalculo(canecas, cor, model) {
            let precoUnitario = 0;

            if (['azul', 'vermelho', 'cinza', 'verde', 'lilás'].includes(cor)) {
                if (model === '300ml' || model === '300ML') {
                    precoUnitario = 11.00;
                } else if (model === '500ml' || model === '500ML') {
                    precoUnitario = 12.00;
                } else if (model === '700ml' || model === '700ML') {
                    precoUnitario = 13.00;
                }
            } else if (['dourada', 'metálica', 'perolizada'].includes(cor)) {
                if (model === '300ml' || model === '300ML') {
                    precoUnitario = 14.00;
                } else if (model === '500ml' || model === '500ML') {
                    precoUnitario = 15.00;
                } else if (model === '700ml' || model === '700ML') {
                    precoUnitario = 16.00;
                }
            }

            return canecas * precoUnitario;
        }

        const valorTotal = getCalculo(canecas, cor, model);
        const resultadoDiv = document.querySelector('#resultado');
        
        if (isNaN(valorTotal) || valorTotal === 0) {
            resultadoDiv.textContent = 'Por favor, selecione todas as opções corretamente.';
        } else {
            resultadoDiv.textContent = `O valor total é: R$ ${valorTotal.toFixed(2)}`;
        }
    });
});
