import { Col, FormGroup, Input, Label } from "reactstrap";

export default function Categorias({ onChange = () => {} }) {
  const categorias = [
    { id: 1, nome: "Alimentos" },
    { id: 2, nome: "Higiene Pessoal" },
    { id: 3, nome: "Produtos de limpeza" },
  ];

  return (
    <>
      <Col sm={12} lg={4}>
        <FormGroup>
          <Label htmlFor="category">Categoria</Label>
          <Input
            id="category"
            name="category"
            type="select"
            onChange={onChange}
          >
            <option value={null}>Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.nome}>
                {categoria.nome}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Col>
    </>
  );
}
