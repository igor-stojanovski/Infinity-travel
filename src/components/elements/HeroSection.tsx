import React from "react";
import SearchBar from "../buttons/SearchBar";
import styled from "@emotion/styled";

interface Props {
  imgSrc: string;
  showSearchBarInBanner: boolean;
}

const HeroSection: React.FC<Props> = ({ imgSrc, showSearchBarInBanner }) => {
  return (
    <HeroSectionStyle
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <div className="hero-image-wrapper">
        <div className="torn-widget">
          <h3 className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          {showSearchBarInBanner ? (
            <div className="search-bar-wrapper">
              <SearchBar />
            </div>
          ) : null}
        </div>
      </div>
    </HeroSectionStyle>
  );
};

export default HeroSection;

const HeroSectionStyle = styled.div`
  height: 350px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;

  @media (min-width: 1000px) {
    height: 400px;
    padding: 64px;
  }

  .hero-image-wrapper {
    width: 80%;
    margin: 0 auto;
    min-height: 268px;
    display: flex;
    justify-content: center;

    @media (min-width: 1000px) {
      justify-content: start;
    }
  }

  .torn-widget {
    background-image: url("../../images/torn-image-bg-1.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    padding: 24px;
    width: 247px;
    height: 199px;

    .search-bar-wrapper {
      display: none;
    }

    & h3 {
      font-size: 18px;
      font-weight: 600;
    }

    @media (min-width: 1000px) {
      width: 429px;
      height: 268px;

      .search-bar-wrapper {
        display: block;
      }

      & h3 {
        font-size: 26px;
      }
    }
  }
`;
