import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardOffer from "../elements/Card";
import { Arrangements } from "@/types/data";

interface Props {
  arrangements: Arrangements[];
}

const ContainerArrangements: React.FC<Props> = ({ arrangements }) => {
  return (
    <Container>
      <Row>
        {arrangements.map((arrangement) => {
          return (
            <Col key={arrangement.Id} xs={12} md={6} lg={3}>
              <CardOffer arrangement={arrangement} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ContainerArrangements;
