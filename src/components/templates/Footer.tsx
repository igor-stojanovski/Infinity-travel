import styled from "@emotion/styled";
import React, { useState } from "react";
import {
  Accordion,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { PrimaryButtonStyle } from "../buttons/PrimaryButton";
import FooterInfoLinksComponent from "../elements/FooterInfoLinksComponent";
import FooterInfoWithoutLinksComponent from "../elements/FooterInfoWithoutLinksComponent";

export type InfoLinkComp = {
  text: string;
  link: string;
};

const Footer: React.FC = () => {
  const destinationsFooterData: InfoLinkComp[] = [
    {
      text: "Грција",
      link: "/Грција",
    },
    {
      text: "Турција",
      link: "/Турција",
    },
    {
      text: "Црна Гора",
      link: "/Црна Гора",
    },
    {
      text: "Хрватска",
      link: "/Хрватска",
    },
    {
      text: "Египет",
      link: "/Египет",
    },
    {
      text: "Италија",
      link: "/Италија",
    },
    {
      text: "Егзотични дестинации",
      link: "/egzoticni-destinasii",
    },
  ];

  const infoFooterData: InfoLinkComp[] = [
    {
      text: "Авио карти",
      link: "/avionski-karti",
    },
    {
      text: "MICE Туризам",
      link: "/grupni-patuvanja",
    },
    {
      text: "Team building",
      link: "/grupni-patuvanja",
    },
    {
      text: "Tailor made",
      link: "/grupni-patuvanja",
    },
    {
      text: "Gift card",
      link: "/grupni-patuvanja",
    },
  ];

  const restInfoFooterData: InfoLinkComp[] = [
    {
      text: "За нас",
      link: "/za-nas",
    },
    {
      text: "Општи услови за користење",
      link: "/opsti-uslovi",
    },
    {
      text: "Патничко осигурување",
      link: "/patnicko-osiguruvanje",
    },
  ];

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [isLiveMessageSent, setIsLiveMessageSent] = useState(false);

  const [timeLiveChatMessageSent, setTimeLiveChatMessageSent] = useState(
    new Date()
  );
  const [liveMessageValue, setLiveMessageValue] = useState("");

  const timeMessageSent = `${timeLiveChatMessageSent.getHours()}:${timeLiveChatMessageSent.getMinutes()}`;

  const [showModalDataSent, setShowModalDataSent] = useState(false);
  const handleClose = () => setShowModalDataSent(false);
  const handleShow = () => setShowModalDataSent(true);

  const [showChat, setShowChat] = useState(false);
  const handleCloseChat = () => setShowChat(false);
  const handleShowChat = () => setShowChat(true);

  function handleNameInput(event: React.ChangeEvent<any>) {
    setNameInput(event.currentTarget.value);
  }

  function handleEmailInput(event: React.ChangeEvent<any>) {
    setEmailInput(event.currentTarget.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch(`https://trapezoidal-sharp-quark.glitch.me/subscriptions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameInput,
        email: emailInput,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    resetForm();
    handleShow();
  }

  function resetForm() {
    setNameInput("");
    setEmailInput("");
  }

  return (
    <>
      <AccordionStyle>
        <Accordion.Item eventKey="0" className="accordion-item">
          <Accordion.Header className="acc-header">
            Пријави се и добивај актуелни понуди на твојот маил
          </Accordion.Header>
          <Accordion.Body>
            <FormStyle onSubmit={handleSubmit}>
              <Form.Group
                className=" group-wrapper"
                controlId="formBasicPassword"
              >
                <Form.Label>Име</Form.Label>
                <Form.Control
                  type="text"
                  value={nameInput}
                  onChange={handleNameInput}
                  required
                />
              </Form.Group>
              <Form.Group className=" group-wrapper" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  required
                  className="form-control"
                  value={emailInput}
                  onChange={(event) => {
                    handleEmailInput(event);
                  }}
                />
              </Form.Group>
              <Form.Group
                className=" group-wrapper"
                controlId="formBasicCheckbox"
              >
                <Form.Label className="invisible">a</Form.Label>
                <PrimaryButtonStyle type="submit">
                  Пријави ме
                </PrimaryButtonStyle>
              </Form.Group>
            </FormStyle>
            <p className="text-center mt-3">
              Со кликнување на Пријави ме се зачленуваш за добивање на маилови
              за нашите актуелни понуди и промоции
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </AccordionStyle>

      <Container>
        <Row>
          <Col xs={6} md={4} lg={3}>
            <FooterInfoLinksComponent
              dataLinks={destinationsFooterData}
              title="Дестинации"
            />
          </Col>
          <Col xs={6} md={4} lg={3}>
            <FooterInfoLinksComponent
              dataLinks={infoFooterData}
              title="Информации"
            />
          </Col>
          <Col xs={6} md={4} lg={3}>
            <FooterInfoLinksComponent
              title="Останато"
              dataLinks={restInfoFooterData}
            />
          </Col>
          <Col xs={6} md={4} lg={3}>
            <FooterInfoWithoutLinksComponent />
          </Col>
        </Row>
      </Container>
      <TraderMark>
        <p>&copy; 2023 Инфинити травел. Сите права се задржани.</p>
        <LiveChatButton onClick={handleShowChat}>
          <div className="wrapperIcon">
            <img src="/images/speech-bubble1.png" alt="Live Chat Image" />
          </div>
          Live Chat
        </LiveChatButton>
      </TraderMark>
      <Modal show={showModalDataSent} onHide={handleClose} centered>
        <ModalDataSent>
          <Modal.Body>
            <i className="fa-regular fa-circle-check"></i>
            Успешно се зачленивте!
            <div>
              <Button onClick={handleClose}>Во ред</Button>
            </div>
          </Modal.Body>
        </ModalDataSent>
      </Modal>
      <Modal show={showChat} onHide={handleCloseChat} centered>
        <ChatModalStyle>
          <Modal.Header className="d-flex justify-content-end border-bottom-0 ">
            <button className="closeBtnWrapper " onClick={handleCloseChat}>
              <img src="images/icon-close-button1.png" alt="Close Button" />
            </button>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column w80 ms-0 pb-5 ">
            <span className="message mb-2">
              Како би можеле да ви помогнеме?
            </span>
            {isLiveMessageSent && (
              <>
                <span className="message mb-2">
                  Ви благодариме што не контактиравте.
                </span>
                <span className="message">Вашата порака е испратена.</span>
                <span className="timeMessage align-self-end ">
                  {timeMessageSent}
                </span>
              </>
            )}
          </Modal.Body>
          <Modal.Footer className="border-top-0">
            <div className="d-flex justify-content-between w-100  ">
              <Form.Control
                type="text"
                className="textInput"
                value={liveMessageValue}
                onChange={(e) => {
                  setLiveMessageValue(e.currentTarget.value);
                }}
              ></Form.Control>
              <PrimaryButtonStyle
                onClick={() => {
                  if (!liveMessageValue) {
                    return;
                  } else {
                    setIsLiveMessageSent(true);
                    fetch(
                      `https://trapezoidal-sharp-quark.glitch.me/liveMessages`,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          liveMessage: liveMessageValue,
                        }),
                      }
                    )
                      .then((response) => response.json())
                      .then((data) => {
                        console.log(data);
                      })
                      .catch((error) => {
                        console.error(error);
                      });
                    setTimeLiveChatMessageSent(new Date());
                    setLiveMessageValue("");
                  }
                }}
              >
                Испрати
              </PrimaryButtonStyle>
            </div>
          </Modal.Footer>
        </ChatModalStyle>
      </Modal>
    </>
  );
};

export default Footer;

const AccordionStyle = styled(Accordion)`
  background-color: var(--tertiary-color);

  & > * {
    background-color: var(--tertiary-color);
  }

  .acc-header {
    background-color: var(--tertiary-color);

    & button {
      background-color: var(--tertiary-color);
      text-align: center;
      justify-content: center;
    }

    & button::before {
      content: "";
      display: inline-block;
      width: 30px;
      height: 20px;
      background-image: url("../../images/mail.png");
      background-size: cover;
      margin-right: 10px;
    }

    & button::after {
      margin: 0;
    }

    @media (min-width: 600px) {
      & button::before {
        width: 20px;
      }
    }
  }
`;

const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .group-wrapper:not(:last-child) {
      margin-right: 24px;
    }
  }
`;

const TraderMark = styled.div`
  background-color: var(--secondary-color);
  padding: 12px;
  color: white;

  position: relative;

  @media (min-width: 1000px) {
    padding: 18px;
  }
`;

const LiveChatButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 12px;
  background-color: #ffcc16;
  display: flex;
  align-items: center;
  font-weight: bold;
  position: absolute;
  top: -50px;
  left: 30px;

  .wrapperIcon {
    width: 30px;
    height: 30px;
    margin-right: 12px;
  }

  @media (min-width: 600px) {
    top: -10px;
    left: auto;
    right: 30px;
  }
`;

const ChatModalStyle = styled.div`
  .closeBtnWrapper {
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
  }

  .message {
    padding: 16px 16px;
    border-radius: 4px;
    border: 1px solid #ffcc16;
    position: relative;

    & .timeMessage {
      position: absolute;
      bottom: 10px;
      right: 5px;
    }
  }

  & .textInput {
    margin-right: 8px;
    border: 1px solid #ffcc16;
  }
`;

export const ModalDataSent = styled.div`
  font-size: 26px;
  font-weight: bold;

  .modal-body {
    display: flex;
    flex-direction: column;
    text-align: center;

    & i {
      font-size: 48px;
      color: green;
      margin-bottom: 24px;
    }

    & button {
      background-color: #21b0b7;
      color: white;
      border: none;
      margin-top: 24px;
    }
  }
`;
