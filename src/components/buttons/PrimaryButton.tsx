import styled from "@emotion/styled";
import React from "react";

interface Props {
  text: string;
  handleSubmit?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | (() => void);
}

const PrimaryButton: React.FC<Props> = ({ text, handleSubmit }) => {
  return (
    <PrimaryButtonStyle
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        if (handleSubmit) {
          handleSubmit(e);
        }
      }}
    >
      {text}
    </PrimaryButtonStyle>
  );
};

export default PrimaryButton;

export const PrimaryButtonStyle = styled.button`
  color: black;
  background-color: var(--primary-color);
  font-size: 20px;
  border: none;
  border-radius: 5px;
  padding: 11px 20px;
  font-weight: 500;
  width: 100%;
`;
