import React from "react";
import { Card } from "react-bootstrap";
import SecondaryButton from "../buttons/SecondaryButton";
import styled from "@emotion/styled";
import { Arrangements } from "@/types/data";
import { getMinPriceForArrangement } from "@/helpers/getMinPriceForArrangement";

interface Props {
  arrangement: Arrangements;
}

const CardOffer: React.FC<Props> = ({ arrangement }) => {
  const ratingStars = new Array(3).fill("");

  const minPrice = getMinPriceForArrangement(arrangement);

  return (
    <CardStyle style={{ width: "100%" }} className="shadow">
      <Card.Img variant="top" src={arrangement?.Gallery[0].Thumbnail} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          {arrangement?.Name}
          <span>
            {ratingStars.map((_, idx) => (
              <i
                key={`star-${arrangement.Id}-${idx}`}
                className="fa-solid fa-star text-warning"
              ></i>
            ))}
          </span>
        </Card.Title>
        <div>
          <div className="location-icon mb-2">
            <span>
              {arrangement?.Location.Country},
              {arrangement?.Location.Region
                ? arrangement?.Location.Region
                : arrangement?.Location.City}
            </span>
          </div>
          <div className="price-duration-wrapper d-flex justify-content-between">
            <div className="duration text-secondary">
              <p>10 ноќевања/наем соба</p>
              <p>50м од плажа</p>
            </div>
            <div className="price fw-bold text-end ">
              <p>од</p>
              <p>&euro; {minPrice}</p>
            </div>
          </div>
        </div>
      </Card.Body>
      {arrangement.Location.Country === "Македонија" ? (
        <SecondaryButton
          linkTo={`/istrazi-ja-makedonija/${arrangement.Type}/${arrangement.Id}`}
          text="Повеќе"
        />
      ) : arrangement.Location.Country === "Егзотични дестинации" ? (
        <SecondaryButton
          linkTo={`/egzoticniDestinacii/${arrangement.Type}/${arrangement.Id}`}
          text="Повеќе"
        />
      ) : (
        <SecondaryButton
          linkTo={`/${arrangement.Location.Country}/${arrangement.Type}/${arrangement.Id}`}
          text="Повеќе"
        />
      )}
    </CardStyle>
  );
};

export default CardOffer;

const CardStyle = styled(Card)`
  margin-bottom: 12px;

  & img {
    border-radius: 0;
    max-height: 178px;
  }

  @media (min-width: 1000px) {
    margin-bottom: 0;
    height: 100%;
  }

  .location-icon::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url("/images/location-1.png");
    background-size: cover;
    margin-right: 10px;
  }
`;
