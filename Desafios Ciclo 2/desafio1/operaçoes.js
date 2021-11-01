  window.onload = function(){

  
    
        (() => {
            let mostrarProdutoCliente = document.querySelector("#produtos");
           
            for (let u in produtos) {
                 mostrarProdutoCliente.innerHTML += `<li class = "itemProduto" 
                 data-precos=${produtos[u].preco}> ${produtos[u].descrição} </li>`;
               
            }
           
        }
         
        )(produtos);
    
    
    const itens = document.querySelectorAll("#produtos > li.itemProduto");
    const cestaCliente = document.querySelector("ul#cestaDoCliente");
    const totalCesta = document.querySelector("#mostraTotalCompra");
    const estanteDeCompra = [];
    var   totalPedido = 0;

    
    itens.forEach((item) => {

        item.addEventListener('click', () => {

            if ( estanteDeCompra.indexOf(item.textContent) == -1 ) {

                li = document.createElement("li");
                li.setAttribute("class", "itemProduto");
                li.setAttribute("data-precos", item.dataset.precos);
                estanteDeCompra.push(item.textContent);
                cestaCliente.appendChild(li).textContent = item.textContent;
                totalPedido += Number(item.dataset.precos);
                totalCesta.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            } else {
                alert(`Este item ${item.textContent} já esta na sua cesta!`);
            }
        });
    });
    
       
       
     
    
}