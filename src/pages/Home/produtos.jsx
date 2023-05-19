import { createFactory } from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

export default function Produtos({ category }) {
  const produtos = [
    { id: 4, nome: "Aveia", categoria: { id: 1, nome: "Alimentos" } },
    {
      id: 5,
      nome: "Sabão em pó",
      categoria: { id: 3, nome: "Produtos de limpeza" },
    },
    { id: 6, nome: "Laranja", categoria: { id: 1, nome: "Alimentos" } },
    { id: 7, nome: "Sabonete", categoria: { id: 2, nome: "Higiene Pessoal" } },
  ];

  return (
    <>
      <Col sm={12} lg={4}>
        <FormGroup>
          <Label htmlFor="product">Produto</Label>
          <Input id="product" name="product" type="select">
            {category !== undefined || category !== null ? (
              <>
                {produtos.map((produto) => {
                  var categoria = produto.categoria;

                  return (
                    <>
                      {categoria.nome == category ? (
                        <option key={produto.id} value={produto.nome}>
                          {produto.nome}
                        </option>
                      ) : null}
                    </>
                  );
                })}
              </>
            ) : (
              <option value={null}>Selecione uma categoria</option>
            )}
          </Input>
        </FormGroup>
      </Col>
    </>
  );
}
