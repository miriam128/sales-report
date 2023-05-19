import React, { useState } from "react";
import "./home.css";
import GuestLayout from "../../layouts/GuestLayout";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Categorias from "./categorias";
import Produtos from "./Produtos";
import Marcas from "./marcas";
import Chart from "./chart";

function Home() {
  document.title = "Sales Report | Miriam Amaral";

  const [formValues, setFormValues] = useState({});

  function handleInputChange(event) {
    event.preventDefault();

    const { value, name } = event.target;

    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <GuestLayout>
      <div className="main-content">
        <div className="row top-container">
          <Col className="company-logo-container">
            <div className="company-name-text">Empresa</div>
            <p className="company-name-description">Volume de vendas mensal</p>
          </Col>
        </div>
        <div className=" row filters-container">
          <Col>
            <Form className="p-0 w-100">
              <Row>
                <Categorias onChange={handleInputChange} />
                <Produtos category={formValues.category} />
                <Marcas />
              </Row>
            </Form>
          </Col>
        </div>
        <Chart />
      </div>
    </GuestLayout>
  );
}

export default Home;
