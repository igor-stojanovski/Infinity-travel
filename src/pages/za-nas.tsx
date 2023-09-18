import HeroSection from "@/components/elements/HeroSection";
import SectionTitle from "@/components/elements/SectionTitle";
import ContactFormWrapper from "@/components/templates/ContactFormWrapper";
import styled from "@emotion/styled";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>За нас</title>
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
        showSearchBarInBanner={false}
      />
      <div className="w90 section-divider">
        <SectionTitle title="За нас" />
      </div>
      <AboutSectionWrapper className="about-section">
        <div className="about-section-image-wrapper">
          <div className="torn-widget">
            <h3 className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, vitae illum molestiae quaerat temporibus numquam
              mollitia at nobis error facilis rerum amet odit tenetur iste
              deleniti eum maiores consequatur sint tempore suscipit facere
              commodi! Eligendi iusto ad voluptates quidem, placeat, architecto
              libero, qui pariatur cupiditate doloremque totam. Veniam, odio
              consequuntur!
            </p>
          </div>
        </div>
      </AboutSectionWrapper>
      <div className="w90 section-divider">
        <SectionTitle title="Контакт" />
        <ContactFormWrapper />
      </div>
    </>
  );
};

export default AboutUs;

const AboutSectionWrapper = styled.div`
  padding: 24px;
  background-image: url("images/about-section-bg-image.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;

  @media (min-width: 1000px) {
    padding: 48px;
  }

  .about-section-image-wrapper {
    min-height: 268px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    @media (min-width: 1000px) {
      justify-content: end;
    }
  }

  .torn-widget {
    height: 100%;
    background-image: url("/images/torn-image-bg-white.png");
    background-size: cover;
    background-repeat: no-repeat;

    padding: 24px;
    width: 247px;

    @media (min-width: 1000px) {
      width: 429px;
    }
  }
`;
