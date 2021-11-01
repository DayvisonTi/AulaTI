window.onload = function( ){

   const botãoCep=document.querySelector("#botão");
   const cxCep=document.querySelector("#Cep");
   const dadosCep = async function(cepUrl){
       
       var url=`https://viacep.com.br/ws/${cepUrl}/json/`;
       var consultaCep=await fetch(url); 
       var dadosCep=await consultaCep.json();
                 
       for(var campos in dadosCep){
           console.log(dadosCep);
           if(document.querySelector("#"+campos)){
           document.querySelector("#"+campos).value=dadosCep[campos]
           }
       }
   }
   botãoCep.addEventListener("click", ()=>{
       let cep = cxCep.value;         
       dadosCep(cep);
   })
}     