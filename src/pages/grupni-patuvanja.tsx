import HeroSection from "@/components/elements/HeroSection";
import SectionTitle from "@/components/elements/SectionTitle";
import WrapperDescriptionWithImage from "@/components/elements/WrapperDescriptionWithImage";
import WrapperDescriptionWithImageReversed from "@/components/elements/WrapperDescriptionWithImageReversed";
import ContactFormWrapper from "@/components/templates/ContactFormWrapper";

import { NextPage } from "next";
import Head from "next/head";

interface Props {}

const GroupTravel: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Групни патувања</title>
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
      <main>
        <HeroSection
          imgSrc="images/banner-group-travel.jpg"
          showSearchBarInBanner={true}
        />
        <div className="w90 section-divider">
          <SectionTitle title="Групни патувања" />
          <WrapperDescriptionWithImage
            title="Mice Tourism"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
            image="images/group-img-1.jpg"
          />
          <WrapperDescriptionWithImageReversed
            title="Mice Tourism"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
            image="images/group-img-1.jpg"
          />

          <WrapperDescriptionWithImage
            title="Mice Tourism"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
            image="images/group-img-1.jpg"
          />
        </div>
        <div className="w90 section-divider">
          <SectionTitle title="Контакт" />
          <ContactFormWrapper />
        </div>
      </main>
    </>
  );
};

export default GroupTravel;
