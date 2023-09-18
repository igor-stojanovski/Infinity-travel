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

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
  dataSourceAvailableFiltersHotels: Arrangements[];
  dataSourceAvailableFiltersApartments: Arrangements[];
  dataRegionHotels: Arrangements[];
  dataRegionApartments: Arrangements[];
}

const CountryOffer: NextPage<Props> = ({
  dataSourceAvailableFiltersApartments,
  dataRegionApartments,
  dataRegionHotels,
  dataSourceAvailableFiltersHotels,
}) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const chunkArrApartments = chunkArrangements(dataRegionApartments);
  const chunkArrHotels = chunkArrangements(dataRegionHotels);

  const regionsApt = getRegionsArray(dataSourceAvailableFiltersApartments);
  const regionsHotel = getRegionsArray(dataSourceAvailableFiltersHotels);

  const router = useRouter();

  return (
    <div>
      <HeroSection
        imgSrc="images/banner-countries.jpg"
        showSearchBarInBanner={true}
      />

      <div className="w90 section-divider">
        <SectionTitle title={`${router.query.drzava} Апартмани`} />
        <ContainerTabButtons
          pageNameButtonAt="countriesApartments"
          nameToFilterBy={regionsApt}
        />

        {screenWidth > 1000 && dataRegionApartments.length > 4 ? (
          <CarouselComponent arrangements={chunkArrApartments} />
        ) : (
          <ContainerArrangements arrangements={dataRegionApartments} />
        )}
        {dataRegionApartments.length === 0 ? (
          <NoOffersComponent />
        ) : (
          <SeeMoreLink linkTo={`${router.query.drzava}/Апартмани`} />
        )}
      </div>
      <div className="w90 section-divider">
        <SectionTitle title={`${router.query.drzava} Хотели`} />
        <ContainerTabButtons
          pageNameButtonAt="countriesHotels"
          nameToFilterBy={regionsHotel}
        />
        {screenWidth > 1000 && dataRegionHotels.length > 4 ? (
          <CarouselComponent arrangements={chunkArrHotels} />
        ) : (
          <ContainerArrangements arrangements={dataRegionHotels} />
        )}
        {dataRegionHotels.length === 0 ? (
          <NoOffersComponent />
        ) : (
          <SeeMoreLink linkTo={`${router.query.drzava}/Хотели`} />
        )}
      </div>
    </div>
  );
};

export default CountryOffer;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const regionApartments = query.apartmentsRegion;
  const regionHotels = query.hotelsRegion;
  const IsLastMinuteApartments = query.isLastMinuteApartments;
  const IsLastMinuteHotels = query.isLastMinuteHotels;

  let linkApartments: string;
  let linkHotels: string;

  try {
    if (IsLastMinuteApartments) {
      linkApartments = `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=${query.drzava}&Type_like=Апартмани&IsLastMinute_like=true`;
    } else if (regionApartments) {
      linkApartments = `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=${query.drzava}&Location.Region_like=${regionApartments}&Type_like=Апартмани`;
    } else {
      linkApartments = `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=${query.drzava}&Type_like=Апартмани`;
    }

    if (IsLastMinuteHotels) {
      linkHotels = `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=${query.drzava}&Type_like=Хотели&IsLastMinute_like=true`;
    } else if (regionHotels) {
      linkHotels = `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=${query.drzava}&Location.Region_like=${regionHotels}&Type_like=Хотели`;
    } else {
      linkHotels = `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=${query.drzava}&Type_like=Хотели`;
    }
    const sourceAvailableFiltersApartments = await fetch(
      `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=${query.drzava}&Type_like=Апартмани`
    );
    const dataSourceAvailableFiltersApartments: Arrangements[] =
      await sourceAvailableFiltersApartments.json();

    const sourceAvailableFiltersHotels = await fetch(
      `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=${query.drzava}&Type_like=Хотели`
    );
    const dataSourceAvailableFiltersHotels: Arrangements[] =
      await sourceAvailableFiltersHotels.json();

    const resRegionApartments = await fetch(linkApartments);
    const dataRegionApartments: Arrangements[] =
      await resRegionApartments.json();

    const resRegionHotels = await fetch(linkHotels);
    const dataRegionHotels: Arrangements[] = await resRegionHotels.json();

    return {
      props: {
        dataSourceAvailableFiltersApartments,
        dataRegionApartments,
        dataRegionHotels,
        dataSourceAvailableFiltersHotels,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
