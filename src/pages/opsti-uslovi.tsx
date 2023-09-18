import DescriptionWithTitleComponent from "@/components/elements/DescriptionWithTitleComponent";
import HeroSection from "@/components/elements/HeroSection";
import SectionTitle from "@/components/elements/SectionTitle";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const TermsAndConditions: NextPage = () => {
  return (
    <>
      <Head>
        <title>Општи услови</title>
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
      <HeroSection
        imgSrc="/images/banner-about.jpg"
        showSearchBarInBanner={true}
      />
      <div className="w90 section-divider">
        <SectionTitle title="Општи услови" />
        <div className="w80">
          <DescriptionWithTitleComponent
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          />
          <DescriptionWithTitleComponent
            title="Lorem ipsum dolor sin amet"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerciLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  "
          />
          <DescriptionWithTitleComponent
            title="Lorem ipsum consectetur adipiscing elit, sed do eiusmo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerciLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tation u"
          />
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
