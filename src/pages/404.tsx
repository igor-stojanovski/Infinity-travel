import styled from "@emotion/styled";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const ErrorPage: NextPage = () => {
  return (
    <ErrorStyle>
      <h1 className="text-center">
        Ууупс... Настана некоја грешка. Вратете се на{" "}
        <Link href={`/`}>почетна</Link>
      </h1>
    </ErrorStyle>
  );
};

export default ErrorPage;

const ErrorStyle = styled.div`
  min-height: 50vh;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  .text-center {
    color: #21b0b7;

    & a {
      text-decoration: none;
      color: #7a4094;
    }
  }
`;
