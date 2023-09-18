import { Testimonials } from "@/types/data";
import styled from "@emotion/styled";

import React from "react";
import { Card } from "react-bootstrap";

interface Props {
  testimonial: Testimonials;
}

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  const stars = new Array(testimonial.Rating).fill("");
  return (
    <TestimonialCardStyle>
      <div className="layer-top"></div>
      <Card.Img variant="top" src={testimonial.url} />
      <Card.Body>
        <Card.Title>{testimonial.Title}</Card.Title>
        <Card.Text>
          <span className="d-block">
            {stars.map((star, i) => (
              <i
                key={`star-${i}${testimonial.Id}`}
                className="fa-solid fa-star text-warning"
              ></i>
            ))}
          </span>
          {testimonial.Description}
        </Card.Text>
        <div className="fw-bold w-50 mt-3 ">
          <p>{testimonial.Arrangement}</p>
          <div className="torn-underline"></div>
        </div>
      </Card.Body>
    </TestimonialCardStyle>
  );
};

export default TestimonialCard;

const TestimonialCardStyle = styled(Card)`
  margin: 12px auto;
  position: relative;
  width: 80%;

  .layer-top {
    position: absolute;
    top: -15px;
    left: 25%;
    background-image: url("/images/layer.png");
    background-size: cover;
    height: 30px;
    width: 50%;
  }

  @media (min-width: 1000px) {
    margin: 0 auto;
    width: 100%;
  }

  @media (min-width: 1400px) {
    width: 80%;
  }

  .torn-underline {
    background-image: url("images/image-torn-underline.jpg");
    background-size: cover;
    height: 7px;
    width: 100%;
  }
`;
