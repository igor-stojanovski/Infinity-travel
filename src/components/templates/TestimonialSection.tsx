import React from "react";
import SectionTitle from "../elements/SectionTitle";
import TestimonialCard from "../elements/TestimonialCard";
import styled from "@emotion/styled";
import { Col, Container, Row } from "react-bootstrap";
import { Testimonials } from "@/types/data";

interface Props {
  testimonials: Testimonials[];
}

const TestimonialSection: React.FC<Props> = ({ testimonials }) => {
  return (
    <>
      <SectionTitle title="Тестимониал" />
      <TestimonialSectionStyle>
        <Container>
          <Row>
            {testimonials.map((testimonial) => (
              <Col key={testimonial.Id} xs={12} md={6} lg={4}>
                <TestimonialCard testimonial={testimonial}></TestimonialCard>
              </Col>
            ))}
          </Row>
        </Container>
      </TestimonialSectionStyle>
    </>
  );
};

export default TestimonialSection;

const TestimonialSectionStyle = styled.div`
  background-image: url("images/testimonial-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;

  @media (min-width: 1000px) {
    padding: 24px;
  }
`;
