import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  linkTo: string;
}

const SecondaryButton: React.FC<Props> = ({ text, linkTo }) => {
  return (
    <Link href={linkTo}>
      <SecondaryButtonStyle>{text} </SecondaryButtonStyle>
    </Link>
  );
};

export default SecondaryButton;

const SecondaryButtonStyle = styled.button`
  color: black;
  background-color: white;
  border: 3px solid var(--primary-color);
  font-size: 20px;
  border-radius: 4px;
  padding: 10px 18px;
  font-weight: 600;
  width: 100%;
`;
