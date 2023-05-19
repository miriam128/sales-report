import { Col, FormGroup, Input, Label } from "reactstrap";

export default function Marcas() {
  const marcas = [
    {
      id: 8,
      nome: "Quaker",
      produto: {
        id: 1,
        nome: "Aveia",
        categoria: { id: 1, nome: "Alimentos" },
      },
    },
    {
      id: 9,
      nome: "Leva aí",
      produto: {
        id: 3,
        nome: "Laranja",
        categoria: { id: 1, nome: "Alimentos" },
      },
    },
  ];

  return (
    <>
      {" "}
      <Col sm={12} lg={4}>
        <FormGroup>
          <Label htmlFor="brand">Marca</Label>
          <Input id="brand" name="brand" type="select">
            <option value={null}>Selecione uma marca</option>
            {marcas.map((marca) => (
              <option key={marca.id} value={marca.nome}>
                {marca.nome}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Col>
    </>
  );
}
