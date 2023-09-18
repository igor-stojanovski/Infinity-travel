import styled from "@emotion/styled";
import React from "react";

interface Props {
  title: string;
  description: string;
}

const DescriptionWithTitleComponent: React.FC<Props> = ({
  title,
  description,
}) => {
  return (
    <DescriptionWithTitleComponentStyle>
      <h3>{title}</h3>
      <p>{description}</p>
    </DescriptionWithTitleComponentStyle>
  );
};

export default DescriptionWithTitleComponent;

const DescriptionWithTitleComponentStyle = styled.div`
  padding: 12px;

  & h3 {
    font-size: 18px;
    margin-bottom: 12px;
  }

  @media (min-width: 1000px) {
    padding: 24px;
    & h3 {
      font-size: 32px;
      margin-bottom: 16px;
    }
  }
`;
