import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import PrimaryButton from "../buttons/PrimaryButton";
import { airplaneTicketsFormDataType } from "@/types/data";
import { ModalDataSent } from "../templates/Footer";

interface Props {
  airplaneTicketsFormData: airplaneTicketsFormDataType;
}

const ContactForm: React.FC<Props> = ({ airplaneTicketsFormData }) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastName] = useState("");
  const [messageInput, setMessage] = useState("");

  function handleNameInput(event: React.ChangeEvent<any>) {
    setFirstNameInput(event.currentTarget?.value);
  }

  function handleLastNameInput(event: React.ChangeEvent<any>) {
    setLastName(event.currentTarget?.value);
  }

  function handleMessageInput(event: React.ChangeEvent<any>) {
    setMessage(event.currentTarget?.value);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    fetch(`https://trapezoidal-sharp-quark.glitch.me/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: firstNameInput,
        lastName: lastNameInput,
        message: messageInput,
        airplaneTicketsFormData,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    handleShow();
    resetForm();
  }

  function resetForm() {
    setFirstNameInput("");
    setLastName("");
    setMessage("");
  }

  return (
    <>
      <Form>
        <Row>
          <Form.Group
            as={Col}
            sm="6"
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Име</Form.Label>
            <Form.Control
              type="text"
              value={firstNameInput}
              onChange={(event: React.ChangeEvent) => {
                handleNameInput(event);
              }}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            sm="6"
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Презиме</Form.Label>
            <Form.Control
              type="text"
              value={lastNameInput}
              onChange={(event: React.ChangeEvent) => {
                handleLastNameInput(event);
              }}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Порака</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={messageInput}
            onChange={(event: React.ChangeEvent) => {
              handleMessageInput(event);
            }}
          />
        </Form.Group>
        <div className="btn-wrapper-form ">
          <PrimaryButton text="Побарај понуда" handleSubmit={handleSubmit} />
        </div>
      </Form>
      <Modal show={show} onHide={handleClose} centered>
        <ModalDataSent>
          <Modal.Body>
            <i className="fa-regular fa-circle-check"></i>
            Вашите информации се усшешно испратени. Ви благодариме!
            <div>
              <Button onClick={handleClose}>Во ред</Button>
            </div>
          </Modal.Body>
        </ModalDataSent>
      </Modal>
    </>
  );
};

export default ContactForm;
