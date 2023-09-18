import React from "react";
import DescriptionWithTitleComponent from "./DescriptionWithTitleComponent";
import styled from "@emotion/styled";

interface Props {
  title: string;
  description: string;
  image: string;
}

const WrapperDescriptionWithImage: React.FC<Props> = ({
  title,
  description,
  image,
}) => {
  return (
    <WrapperDescriptionWithImageStyle>
      <DescriptionWithTitleComponent
        title={`${title}`}
        description={`${description}`}
      />
      <div className="img-wrapper p-3">
        <img src={`${image}`} alt="Group image" />
      </div>
    </WrapperDescriptionWithImageStyle>
  );
};

export default WrapperDescriptionWithImage;

export const WrapperDescriptionWithImageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    max-height: 315px;
  }

  & > * {
    flex: 0 0 40%;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
