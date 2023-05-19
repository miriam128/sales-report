import { Col, FormGroup, Input, Label } from "reactstrap";

export default function Produtos({ category }) {
  console.log(category);
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
            <option value={null}>Selecione uma categoria</option>
            {produtos.map((produto) => (
              <option key={produto.id} value={produto.nome}>
                {produto.nome}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Col>
    </>
  );
}
