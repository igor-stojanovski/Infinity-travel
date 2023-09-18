import CarouselComponent from "@/components/elements/CarouselComponent";
import ContainerTabButtons from "@/components/elements/ContainerTabButtons";
import HeroSection from "@/components/elements/HeroSection";
import NoOffersComponent from "@/components/elements/NoOffersComponent";
import SectionTitle from "@/components/elements/SectionTitle";
import SeeMoreLink from "@/components/elements/SeeMoreLink";
import ContainerArrangements from "@/components/templates/ContainerArrangements";
import { getRegionsArray } from "@/helpers/getRegions";
import { chunkArrangements } from "@/helpers/getSubArrayWithCountriesForCarousel";
import { Arrangements } from "@/types/data";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

interface Props {
  dataAvailableFiltersMk: Arrangements[];
  dataArrangements: Arrangements[];
}

const ExploreMacedonia: NextPage<Props> = ({
  dataAvailableFiltersMk,
  dataArrangements,
}) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const cities = dataArrangements.filter(
    (arrangement) => arrangement.Type === "Градови"
  );

  const adventures = dataArrangements.filter(
    (arrangement) => arrangement.Type === "Излети"
  );

  const chunkArr = chunkArrangements(cities);
  const chunkArr1 = chunkArrangements(adventures);

  const regionsCities = getRegionsArray(dataAvailableFiltersMk);

  return (
    <>
      <Head>
        <title>Истражи ја Македонија</title>
        <meta
          name="description"
          content="Infinity Travel Agency Macedonia Инфинити Травел Туристичка Агенција Македонија Лето Летување Излети Дестинации Team-Building"
        />
        <meta
          name="keywords"
          content="Македониски-Туризам Патничко Осигурување Сигурност Групни Патувања Тим-Билдинг Туризам Oдмор Лето Летување Излети Дестинации Плажа Море Tourism Summer Vacation Team-Building"
        />
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <HeroSection imgSrc="images/banner-mk.jpg" showSearchBarInBanner={true} />
      <div className="w90 section-divider">
        <ContainerTabButtons
          pageNameButtonAt="explore-macedonia"
          nameToFilterBy={regionsCities}
        />
        <SectionTitle title="Градови" />
        {cities.length > 0 ? (
          <>
            {screenWidth > 1000 && cities.length > 4 ? (
              <CarouselComponent arrangements={chunkArr} />
            ) : (
              <ContainerArrangements arrangements={cities} />
            )}

            <SeeMoreLink linkTo="istrazi-ja-makedonija/Градови" />
          </>
        ) : (
          <NoOffersComponent />
        )}
      </div>
      <div className="w90 section-divider">
        <SectionTitle title="Излети" />
        {adventures.length > 0 ? (
          <>
            {screenWidth > 1000 && adventures.length > 4 ? (
              <CarouselComponent arrangements={chunkArr1} />
            ) : (
              <ContainerArrangements arrangements={adventures} />
            )}
            <SeeMoreLink linkTo="istrazi-ja-makedonija/Излети" />
          </>
        ) : (
          <NoOffersComponent />
        )}
      </div>
    </>
  );
};

export default ExploreMacedonia;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const region = query.region;
  const isLastMinute = query.isLastMinute;
  let link: string;

  try {
    if (region) {
      link = `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=Македонија&Location.Region_like=${query.region}`;
    } else if (isLastMinute) {
      link = `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=Македонија&IsLastMinute_like=true`;
    } else {
      link = `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=Македонија`;
    }
    const resAvailableFiltersMk = await fetch(
      "https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=Македонија"
    );
    const dataAvailableFiltersMk: Arrangements[] =
      await resAvailableFiltersMk.json();

    const resArrangements = await fetch(link);
    const dataArrangements: Arrangements[] = await resArrangements.json();

    return {
      props: { dataAvailableFiltersMk, dataArrangements },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
