import styled from "@emotion/styled";
import React from "react";
import PrimaryButton, { PrimaryButtonStyle } from "../buttons/PrimaryButton";
import Link from "next/link";

export default function HomepageGroupTravelImages() {
  return (
    <>
      <HomepageGroupTravelImagesStyle>
        <div className="imgLeft"></div>
        <div className="imgMiddle">
          <div className="img1"></div>
          <div className="img2"></div>
        </div>
        <div className="imgRight"></div>
        <div className="groupTravelMore">
          <TornImageStyle>
            <h3 className="mb-3">Групни патувања</h3>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
              omnis.
            </p>
            <Link href={`/grupni-patuvanja`}>
              <PrimaryButtonStyle>Повеќе</PrimaryButtonStyle>
            </Link>
          </TornImageStyle>
        </div>
        <div className="stampLondon stamp"></div>
        <div className="stampIstanbul stamp"></div>
        <div className="stampLines stamp"></div>
      </HomepageGroupTravelImagesStyle>
      <IconsTornImageStyle>
        <div className="tornLayer">
          <div className="iconSuitcase iconWrapper">
            <div className="icon"></div>
            <p>1000+патувања Започнете ја вашата авантура</p>
          </div>
          <div className="iconPlanet iconWrapper">
            <div className="icon"></div>
            <p>15000+патници годишно Бидете дел од нашите задоволни патници</p>
          </div>
          <div className="iconLocation iconWrapper">
            <div className="icon"></div>
            <p>Одберете ја вашата дестинација</p>
          </div>
        </div>
        <div className="topSticker sticker"></div>
        <div className="bottomSticker sticker"></div>
      </IconsTornImageStyle>
    </>
  );
}

const HomepageGroupTravelImagesStyle = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  flex-wrap: wrap;

  margin: 150px 0;

  height: 400px;

  .imgLeft {
    background-image: url("images/homepageGroupTravel/gt-img-1.png");
    background-size: cover;
    background-repeat: no-repeat;
    flex-basis: 50%;
    order: 1;
  }

  .imgMiddle {
    background-image: url("images/testimonial-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: space-between;
    order: 4;
    flex-basis: 100%;

    .img1 {
      background-image: url(images/homepageGroupTravel/gt-img-4.png);
      background-size: cover;
      background-repeat: no-repeat;
      align-self: flex-start;
      flex-basis: 40%;
      height: 100%;
    }
    .img2 {
      background-image: url(images/homepageGroupTravel/gt-img-4.png);
      background-size: cover;
      background-repeat: no-repeat;

      height: 100%;
      flex-basis: 40%;
    }

    @media (min-width: 600px) {
      .img1 {
        width: 80%;
        height: 50%;
        transform: rotate(-20deg);
      }

      .img2 {
        width: 80%;
        height: 50%;
      }
    }
  }

  .imgRight {
    background-image: url("images/homepageGroupTravel/gt-img-2.png");
    background-size: cover;
    background-repeat: no-repeat;
    order: 3;

    flex-basis: 50%;
  }

  .groupTravelMore {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 48px;

    @media (min-width: 600px) {
      justify-content: end;
      width: 100%;
    }
  }

  .stamp {
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
  }

  .stampLondon {
    height: 110px;
    width: 100px;
    background-image: url(images/stamps/stamp-london.png);
    top: -70px;
    left: 40%;
  }

  .stampIstanbul {
    height: 100px;
    width: 150px;
    background-image: url(images/stamps/stamp-Istanbul.png);
    bottom: -50px;
    left: 5%;
  }

  .stampLines {
    height: 120px;
    width: 150px;
    background-image: url(images/stamps/stamp-lines.png);
    bottom: -50px;
    right: 5%;
  }

  @media (min-width: 600px) {
    .imgLeft,
    .imgRight,
    .imgMiddle {
      flex-basis: 33.3%;
    }

    .imgMiddle {
      order: 2;
      flex-direction: column;
    }

    .stampIstanbul {
      left: 20%;
    }

    .stampLines {
      right: 20%;
    }
  }
`;

const TornImageStyle = styled.div`
  background-image: url("../../images/torn-image-bg-white.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 24px;
  width: 300px;
  height: 278px;

  @media (min-width: 1000px) {
    width: 350px;
  }

  @media (min-width: 1400px) {
    width: 429px;
  }
`;

const IconsTornImageStyle = styled.div`
  position: relative;
  font-size: 10px;
  padding: 24px;

  .tornLayer {
    background-image: url(images/tornLayerIcons.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 300px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .iconWrapper {
    display: flex;
    flex-direction: column;

    align-items: center;

    & p {
      width: 60%;
      text-align: center;
    }
  }

  .iconSuitcase {
    .icon {
      background-image: url(images/conveyor-band-1.jpg);
    }
  }

  .iconPlanet {
    .icon {
      background-image: url(images/global-network-1.jpg);
    }
  }

  .iconLocation {
    .icon {
      background-image: url(images/location-1.png);
    }
  }

  .icon {
    background-size: cover;
    height: 50px;
    width: 50px;
  }

  .sticker {
    position: absolute;
    background-image: url(images/sticker1.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 120px;
    height: 100px;
  }

  .topSticker {
    top: 15px;
    left: 0;
  }

  .bottomSticker {
    bottom: 15px;
    right: 0;
  }

  @media (min-width: 600px) {
    font-size: 12px;
  }

  @media (min-width: 1000px) {
    font-size: 14px;
  }

  @media (min-width: 1400px) {
    font-size: 16px;
    .tornLayer {
      height: 400px;
    }
  }
`;
