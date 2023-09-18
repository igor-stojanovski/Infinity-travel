import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import CardOffer from "./Card";
import styled from "@emotion/styled";
import { Arrangements } from "@/types/data";

interface Props {
  arrangements: Arrangements[][];
}

const CarouselComponent: React.FC<Props> = ({ arrangements }) => {
  return (
    <CarouselComponentStyle indicators={false} variant="dark">
      {arrangements?.map((chunkedArrangements: Arrangements[], index) => (
        <Carousel.Item key={`carousel-item${index}`}>
          <Container>
            <Row>
              {chunkedArrangements.map((arrangement: Arrangements) => (
                <Col key={arrangement.Id} xs={12} md={6} lg={3}>
                  <CardOffer arrangement={arrangement} />
                </Col>
              ))}
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </CarouselComponentStyle>
  );
};

export default CarouselComponent;

export const CarouselComponentStyle = styled(Carousel)`
  display: none;

  @media (min-width: 600px) {
    display: block;
  }

  .carousel-control-next-icon {
    background-image: url("./images/chevron-right.png");
    background-size: cover;
    height: 250px;
    filter: none;

    @media (min-width: 1000px) {
      margin-right: -170px;
    }

    @media (min-width: 1050px) {
      margin-right: -250px;
    }

    @media (min-width: 1500px) {
      margin-right: 0;
    }
  }

  .carousel-control-prev-icon {
    background-image: url("./images/chevron-left.png");
    filter: none;
    background-size: cover;
    height: 250px;
    filter: none;

    @media (min-width: 1000px) {
      margin-left: -170px;
    }

    @media (min-width: 1400px) {
      margin-left: -250px;
    }

    @media (min-width: 1500px) {
      margin-left: 0;
    }
  }
`;
