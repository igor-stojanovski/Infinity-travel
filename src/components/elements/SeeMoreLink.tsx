import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

interface Props {
  linkTo: string;
}

const SeeMoreLink: React.FC<Props> = ({ linkTo }) => {
  return (
    <SeeMoreLinkStyle className="text-center text-secondary my-3 my-lg-5">
      <Link
        href={`/${linkTo}`}
        className="text-secondary text-decoration-none "
      >
        See more <i className="fa-solid fa-angles-right"></i>
      </Link>
    </SeeMoreLinkStyle>
  );
};

export default SeeMoreLink;

const SeeMoreLinkStyle = styled.div`
  font-weight: 600;
  font-size: 18px;

  @media (min-width: 1000px) {
    font-size: 26px;
  }
`;
