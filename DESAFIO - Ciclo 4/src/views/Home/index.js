import { Container } from "reactstrap"

export const Home = () => {
    return(
        <Container>
            <div className="d-flex "> 
                        <div className ="m-auto p-2">

                    <h1>Home</h1>               
                    </div>

            </div>
            <div className=" p-2">
                <a href = "/listar-cliente" className="btn btn-outline-success  btn-sm">   
                Cliente  </a>


                <a href = "/listar-pedidos" className="btn btn-outline-success  btn-sm">   
                Pedidos  </a>
                 
                <a href = "/listar-servicos" className="btn btn-outline-success  btn-sm">   
                Serviço  </a>

                 <a href="/listar-compras" className="btn btn-outline-success btn-sm">
              Compras
              </a>

              <a href="/listar-produtos" className="btn btn-outline-success btn-sm">
              Produtos
            </a>

          

                 </div>

        </Container>
    );
};