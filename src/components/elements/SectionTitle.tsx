import styled from "@emotion/styled";
import React from "react";

interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <SectionTitleStyle>
      <div className="line"></div>

      <h2>{title}</h2>

      <div className="line"></div>
    </SectionTitleStyle>
  );
};

export default SectionTitle;

const SectionTitleStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;

  & h2 {
    font-size: 18px;
    padding: 16px 0;
    flex-basis: auto;

    @media (min-width: 600px) {
      font-size: 24px;
    }

    @media (min-width: 900px) {
      font-size: 32px;
    }
  }

  & .line {
    border: 1px solid gray;
    flex-basis: 25%;
    width: 100%;

    @media (min-width: 600px) {
      flex-basis: 35%;
    }
  }
`;
