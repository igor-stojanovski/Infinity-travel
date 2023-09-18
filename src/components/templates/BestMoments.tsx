import styled from "@emotion/styled";
import React, { useState } from "react";
import { Col, Container, Image, Modal, Row } from "react-bootstrap";
import SectionTitle from "../elements/SectionTitle";

export type GalleryImage = {
  Id: string;
  Img: string;
  Location: string;
};

interface Props {
  images: GalleryImage[];
}

const BestMoments: React.FC<Props> = ({ images }) => {
  const [show, setShow] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState({
    imageSrc: "",
    location: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (imageSrc: string, location: string) => {
    setCurrentModalImage({
      imageSrc,
      location,
    });
    handleShow();
  };

  return (
    <>
      <SectionTitle title="Ваши моменти" />
      <div className="w90 section-divider">
        <Container>
          <Row>
            {images.map((image) => {
              return (
                <Col key={image.Id} xs={6} md={3} lg={2}>
                  <ImageBootstrapStyle
                    className="img-bootstrap"
                    onClick={() => {
                      handleClick(image.Img, image.Location);
                    }}
                    src={`/images/bestMomentsGallery/${image.Img}`}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <ModalStyle show={show} onHide={handleClose} centered size={"sm"}>
        <ModalBodyStyle>
          <div className="location-tag">
            <p>{currentModalImage.location}</p>
          </div>
          <Image
            src={`/images/bestMomentsGallery/${currentModalImage.imageSrc}`}
          />
        </ModalBodyStyle>
      </ModalStyle>
    </>
  );
};

export default BestMoments;

const ImageBootstrapStyle = styled(Image)`
  margin-bottom: 12px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;

const ModalBodyStyle = styled(Modal.Body)`
  .location-tag {
    position: absolute;
    top: 25px;
    left: 25px;
    background-image: url("/images/layer.png");
    background-size: cover;
    padding: 12px;
    font-weight: bold;

    p::before {
      content: "";
      display: inline-block;
      width: 30px;
      height: 30px;
      background-image: url("/images/location-1.png");
      background-size: cover;
    }
  }
`;

const ModalStyle = styled(Modal)`
  @media (max-width: 600px) {
    .modal-content {
      width: 80%;
      margin: 0 auto;
    }
  }
`;
