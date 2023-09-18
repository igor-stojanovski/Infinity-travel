import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { InfoLinkComp } from "../templates/Footer";

interface Props {
  title: string;
  dataLinks: InfoLinkComp[];
}

const FooterInfoLinksComponent = ({ title, dataLinks }: Props) => {
  return (
    <FooterInfoStyle>
      <h4>{title}</h4>
      <ul>
        {dataLinks.map((dataLink) => {
          return (
            <li key={dataLink.text}>
              <Link href={`${dataLink.link}`}>{dataLink.text}</Link>
            </li>
          );
        })}
      </ul>
    </FooterInfoStyle>
  );
};

export default FooterInfoLinksComponent;

const FooterInfoStyle = styled.div`
  padding: 24px;
  & ul {
    margin-bottom: 0;
    padding-left: 0;
  }
  & h4 {
    font-size: 18px;
    margin-bottom: 12px;
  }

  & a {
    color: black;
    text-decoration: none;
  }

  @media (min-width: 1000px) {
    padding: 48px;

    & h4 {
      font-size: 26px;
    }
  }
`;
