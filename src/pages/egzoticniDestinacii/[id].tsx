import HeroSection from "@/components/elements/HeroSection";
import SectionTitle from "@/components/elements/SectionTitle";
import { chunkArrangements } from "@/helpers/getSubArrayWithCountriesForCarousel";
import { Arrangements, Image } from "@/types/data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { WrapperTitlesStyle } from "../[drzava]/[smestuvanjeTip]/[id]";
import { CarouselComponentStyle } from "@/components/elements/CarouselComponent";
import { Carousel, Col, Container, Row, Table } from "react-bootstrap";
import TablePrices from "@/components/elements/TablePrices";
import Head from "next/head";

interface Props {
  arrangement: Arrangements;
}

const ExoticTravelsDetailsOffer: NextPage<Props> = ({ arrangement }) => {
  const gallery = arrangement.Gallery;

  const chunkedGallery = chunkArrangements<Image>(gallery);

  return (
    <div>
      <Head>
        <title>Егзотични патувања понуда</title>
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
        imgSrc="/images/banner-exotic.jpg"
        showSearchBarInBanner={false}
      />
      <div className="w90 section-divider">
        <SectionTitle title={arrangement.Name} />
        <div className="w80 section-divider">
          <WrapperTitlesStyle>
            <ul className="h20SemiBold">
              <li>Опис</li>
              <li>Галерија</li>
              <li>Цени</li>
              <li>Превоз</li>
            </ul>
            <span className="location-span text-secondary ">
              {`${arrangement?.Location.Country},${arrangement?.Location.Region}`}
            </span>
          </WrapperTitlesStyle>

          <div className="wrapper-description section-divider">
            <h3 className="mb-3">{arrangement?.Name}</h3>
            <p>{arrangement?.Description}</p>
            {gallery.length > 4 ? (
              <CarouselComponentStyle
                indicators={false}
                variant="dark"
                className="section-divider"
              >
                {chunkedGallery?.map((chunkedImages: Image[], index) => (
                  <Carousel.Item key={`carousel-item${index}`}>
                    <Container>
                      <Row>
                        {chunkedImages.map((image: Image) => (
                          <Col key={image.Id} xs={12} md={6} lg={3}>
                            <img src={image.Thumbnail} alt="Gallery Image" />
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  </Carousel.Item>
                ))}
              </CarouselComponentStyle>
            ) : (
              <Container className="images-gallery section-divider">
                <Row>
                  {arrangement?.Gallery.map((img) => {
                    return (
                      <Col key={img.Id} xs={12} md={6} lg={3} className="mb-3">
                        <img
                          className="h-100"
                          src={img.Thumbnail}
                          alt={img.Thumbnail}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            )}
          </div>
          <div className="section-divider">
            <h3>Цени</h3>
            <TablePrices arrangement={arrangement} />
          </div>
          <div className="section-divider">
            <h3 className="mb-3">Превоз</h3>
            <p>{arrangement?.TransportationDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExoticTravelsDetailsOffer;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://trapezoidal-sharp-quark.glitch.me/arrangements"
  );
  const data: Arrangements[] = await res.json();

  const paths = data.map((arrangement) => {
    return {
      params: {
        id: arrangement.Id,
        drzava: arrangement.Location.Country,
      },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  if (id) {
    const res = await fetch(
      `https://trapezoidal-sharp-quark.glitch.me/arrangements?Id=${id}`
    );
    const arrangements: Arrangements[] = await res.json();

    const arrangement = arrangements[0];

    return {
      props: {
        arrangement,
      },
    };
  }

  return {
    notFound: true,
  };
};
