import CarouselComponent from "@/components/elements/CarouselComponent";
import ContainerTabButtons from "@/components/elements/ContainerTabButtons";
import HeroSection from "@/components/elements/HeroSection";
import SectionTitle from "@/components/elements/SectionTitle";
import SeeMoreLink from "@/components/elements/SeeMoreLink";
import ContainerArrangements from "@/components/templates/ContainerArrangements";
import { getRegionsArray } from "@/helpers/getRegions";
import { chunkArrangements } from "@/helpers/getSubArrayWithCountriesForCarousel";
import { Arrangements } from "@/types/data";
import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";

interface Props {
  arrangements: Arrangements[];
  dataRegionsToFilterBy: Arrangements[];
}

const ExoticTravels: NextPage<Props> = ({
  arrangements,
  dataRegionsToFilterBy,
}) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const filtersAvailable = getRegionsArray(dataRegionsToFilterBy);

  const chunkArr = chunkArrangements(arrangements);

  return (
    <>
      <HeroSection
        imgSrc="images/banner-exotic.jpg"
        showSearchBarInBanner={true}
      />
      <div className="w90 section-divider">
        <SectionTitle title="Егзотични дестинации" />
        <ContainerTabButtons
          nameToFilterBy={filtersAvailable}
          pageNameButtonAt="exotic-travels"
        />
        {screenWidth > 1000 && arrangements.length > 4 ? (
          <CarouselComponent arrangements={chunkArr} />
        ) : (
          <ContainerArrangements arrangements={arrangements} />
        )}
      </div>
    </>
  );
};

export default ExoticTravels;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const region = query.region;
  const lastMinute = query.isLastMinute;

  let link: string;

  if (region) {
    link = `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=Егзотични&дестинации&Location.Region_like=${region}`;
  } else if (lastMinute) {
    link = `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=Егзотични&дестинации&IsLastMinute_like=true`;
  } else {
    link =
      "https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=Егзотични&дестинации";
  }

  const res = await fetch(link);
  const arrangements: Arrangements[] = await res.json();

  const resRegionsToFilterBy = await fetch(
    "https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=Егзотични&дестинации"
  );
  const dataRegionsToFilterBy: Arrangements[] =
    await resRegionsToFilterBy.json();

  return {
    props: {
      arrangements,
      dataRegionsToFilterBy,
    },
  };
};
