import styled from "@emotion/styled";
import React from "react";

type Props = {};

export default function NoOffersComponent({}: Props) {
  return (
    <div>
      <NoOfferStyle className="noOffer">
        Во моментот немаме понуди за вашето пребарување.
      </NoOfferStyle>
    </div>
  );
}

const NoOfferStyle = styled.h3`
  text-align: center;
  color: #21b0b7;
`;
