import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

type InfoLinkComp = {
  text: string;
  link: string;
};

interface Props {
  title: string;
  dataLinks: InfoLinkComp[];
}

const FooterInfoWithoutLinksComponent = () => {
  return (
    <FooterInfoWithoutLinksComponentStyle>
      <h4>Контакт</h4>
      <ul>
        <li>
          <p>Адреса: Бул. Даме Груев бр.14 лок.24 1000 Скопје, Македонија</p>
        </li>
        <li>
          <p>
            Е-маил:
            <span className="email-info"> contact@infinitytravel.mk</span>
          </p>
        </li>
        <li>
          <p>Телефон: 023100360 / 072254160</p>
        </li>
        <li>
          <p className="pt-3">
            <Link href={`link-to-instagram-infinity`}>
              <i className="fa-brands fa-instagram me-2 fa-2x"></i>
            </Link>
            <Link href={`link-to-facebook-infinity`}>
              <i className="fa-brands fa-facebook fa-2x"></i>
            </Link>
          </p>
        </li>
      </ul>
    </FooterInfoWithoutLinksComponentStyle>
  );
};

export default FooterInfoWithoutLinksComponent;

const FooterInfoWithoutLinksComponentStyle = styled.div`
  padding: 24px;
  overflow: hidden;

  & a {
    color: black;
    text-decoration: none;
  }
  & ul {
    margin-bottom: 0;
    padding-left: 0;
  }
  & h4 {
    font-size: 18px;
    margin-bottom: 12px;
  }

  .fa-brands {
    color: var(--tertiary-color);
  }

  .email-info {
    font-size: 11px;

    @media (min-width: 600px) {
      font-size: 14px;
    }
  }

  @media (min-width: 1000px) {
    padding: 48px;

    .fa-brands {
      color: black;
    }

    & h4 {
      font-size: 26px;
    }
  }
`;
