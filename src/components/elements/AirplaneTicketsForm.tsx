import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import PrimaryButton from "../buttons/PrimaryButton";
import styled from "@emotion/styled";
import { airplaneTicketsFormDataType } from "@/types/data";

interface Props {
  changeForm: () => void;
  setAirplaneTicketsFormData: React.Dispatch<
    React.SetStateAction<airplaneTicketsFormDataType>
  >;
  airplaneTicketsFormData: airplaneTicketsFormDataType;
}

const AirplaneTicketsForm: React.FC<Props> = ({
  changeForm,
  setAirplaneTicketsFormData,
  airplaneTicketsFormData,
}) => {
  const [ticketType, setTicketType] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | FormControlElement
    >
  ) => {
    const { name, value } = event.target;
    setAirplaneTicketsFormData({ ...airplaneTicketsFormData, [name]: value });
  };

  return (
    <AirplaneTicketsFormStyle>
      <Row>
        <Col className="mb-2">
          <h3 className="airplane-tickets-form-title">Пребарувај</h3>
        </Col>
      </Row>
      <Row>
        <Form.Group
          as={Col}
          xs="6"
          lg="3"
          className="mb-3"
          controlId="inline-radio-1"
        >
          <Form.Check
            inline
            label="Повратен билет"
            name="povratenBilet"
            type="radio"
            id="inline-radio-1"
            value="povratenBilet"
            onChange={(event) => {
              setTicketType("povratenBilet");

              handleChange(event);
            }}
          />
        </Form.Group>

        <Form.Group
          as={Col}
          xs="6"
          lg="3"
          className="mb-3"
          controlId="inline-radio-2"
        >
          <Form.Check
            inline
            label="Еден правец"
            name="povratenBilet"
            type="radio"
            id="inline-radio-2"
            value="edenPravec"
            onChange={(event) => {
              setTicketType("edenPravec");

              handleChange(event);
            }}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group
          as={Col}
          xs="6"
          lg="3"
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Од</Form.Label>
          <Form.Control
            type="text"
            name="od"
            value={airplaneTicketsFormData.od}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group
          as={Col}
          xs="6"
          lg="3"
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>До</Form.Label>
          <Form.Control
            type="text"
            name="do"
            value={airplaneTicketsFormData.do}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          as={Col}
          xs="6"
          lg="3"
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Датум на поаѓање</Form.Label>
          <Form.Control
            type="date"
            name="datumPoaganje"
            value={airplaneTicketsFormData.datumPoaganje}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group
          as={Col}
          xs="6"
          lg="3"
          className="mb-3"
          controlId="ControlInput1"
        >
          <Form.Label>Датум на враќање</Form.Label>
          <Form.Control
            type="date"
            name="datumVrakanje"
            value={airplaneTicketsFormData.datumVrakanje}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          as={Col}
          xs="6"
          lg="3"
          className="mb-3"
          controlId="ControlInput1"
        >
          <Form.Label>Возрасни</Form.Label>
          <Form.Select
            aria-label="Select number of adults traveling"
            name="vozrasni"
            value={airplaneTicketsFormData.vozrasni}
            onChange={handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="poveke">повеќе</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          as={Col}
          xs="6"
          lg="3"
          className="mb-3"
          controlId="ControlInput2"
        >
          <Form.Label>Деца</Form.Label>
          <Form.Select
            aria-label="Select if you have any infants traveling with you"
            name="deca"
            value={airplaneTicketsFormData.deca}
            onChange={handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="poveke">повеќе</option>
          </Form.Select>
        </Form.Group>

        <Form.Group
          as={Col}
          xs="6"
          lg="3"
          className="mb-3"
          controlId="ControlInput3"
        >
          <Form.Label>Бебиња</Form.Label>
          <Form.Select
            aria-label="Select if you have any babies traveling with you"
            name="bebinja"
            value={airplaneTicketsFormData.bebinja}
            onChange={handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="poveke">повеќе</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          as={Col}
          xs="6"
          lg="3"
          className="mb-3"
          controlId="ControlInput4"
        >
          <Form.Label>Класа</Form.Label>
          <Form.Select
            aria-label="Select airplane travel class"
            name="klasa"
            value={airplaneTicketsFormData.klasa}
            onChange={handleChange}
          >
            <option value="ekonomska klasa">Економска класа</option>
            <option value="biznis klasa">Бизнис класа</option>
            <option value="prva klasa">Прва класа</option>
          </Form.Select>
        </Form.Group>
        <Col lg={3}>
          <PrimaryButton text="Побарај понуда" handleSubmit={changeForm} />
        </Col>
      </Row>
    </AirplaneTicketsFormStyle>
  );
};

export default AirplaneTicketsForm;

const AirplaneTicketsFormStyle = styled.form`
  background-color: #e9e9e9;
  padding: 24px;

  .airplane-tickets-form-title {
    font-size: 18px;
    font-weight: 400;
  }

  @media (min-width: 1000px) {
    .airplane-tickets-form-title {
      font-size: 36px;
    }
  }
`;
