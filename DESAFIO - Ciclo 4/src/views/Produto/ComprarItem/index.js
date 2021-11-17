import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const ComprarItemProduto = (props) => {
    const [Item, setItem] = useState({
        nome: '',
        descricao: ''
      })
    
      const[status, setStatus] = useState({
        type: '',
        message: ''
      });
    
      const valorInput = e =>
        setItem({
          ...Item,
          [e.target.name]: e.target.value
        })
    
      const cadItem = async e => {
        e.preventDefault()
        console.log(Item)
    
        const headers = {
          'Content-Type': 'application/json'
        }
    
        await axios
          .post(api + '/itemcompras', Item, { headers })
          .then(response => {
            // console.log(response.data.message)
            if(response.data.error){
              setStatus({
                type:'error',
                message: response.data.message
              });
            }else {
              setStatus({
                type: 'success',
                message: response.data.message
              })
            }
          })
          .catch(() => {
            console.log('Erro: Sem conexão com a API.')
          })
      }
      return (
        <Container>
          <div className="d-flex">
            <div className="m-1 p-2">
              <h1>Cadastrar Novo Produto</h1>
              <h6 className="m-1 p-2">
            É possivel por 1 produto Id em uma uma Compra ja REGISTRADA
          </h6>
            </div>
            <div className="m-auto p-2">
              <Link to="/listar-produtos" className="btn btn-outline-success btn-sm">
                Produtos
              </Link>
            </div>
          </div>
          <hr className="m-1" />

          {status.type === 'error' ? <Alert color="danger">{status.message}</Alert>: ""}
          {status.type === 'success' ? <Alert color="success">{status.message}</Alert>: ""}
    
          <Form className="p-2" onSubmit={cadItem}>

            <FormGroup className="p-2">
              <Label>CompraId</Label>
              <Input
                name="CompraId" //deve ter correspondecia a base de dados
                placeholder="Id da Compra"
                type="text"
                onChange={valorInput}
              />
            </FormGroup>

            <FormGroup className="p-2">
              <Label>ProdutoId</Label>
              <Input
                name="ProdutoId" //deve ter correspondecia a base de dados
                placeholder="Id do produto"
                type="text"
                onChange={valorInput}
              />
            </FormGroup>

            <FormGroup className="p-2">
              <Label>quantidade</Label>
              <Input
                name="quantidade" //deve ter correspondecia a base de dados
                placeholder="Quantidade"
                type="text"
                onChange={valorInput}
              />
            </FormGroup>

            <FormGroup className="p-2">
              <Label>Valor</Label>
              <Input
                name="valor" //deve ter correspondecia a base de dados
                placeholder="Valor do produto"
                type="text"
                onChange={valorInput}
              />
            </FormGroup>
            <Button type="submit" outline color="success">
              Cadastrar
            </Button>
          </Form>
        </Container>
      )
    }