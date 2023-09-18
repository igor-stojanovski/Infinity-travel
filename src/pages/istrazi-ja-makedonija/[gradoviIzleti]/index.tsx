import { PrimaryButtonStyle } from "@/components/buttons/PrimaryButton";
import SearchBar from "@/components/buttons/SearchBar";
import CalendarComponent from "@/components/elements/CalendarComponent";
import CardOffer from "@/components/elements/Card";
import HeroSection from "@/components/elements/HeroSection";
import NoOffersComponent from "@/components/elements/NoOffersComponent";
import SectionTitle from "@/components/elements/SectionTitle";
import ContainerArrangements from "@/components/templates/ContainerArrangements";
import { getMinPriceForArrangement } from "@/helpers/getMinPriceForArrangement";
import {
  FiltersAccordion,
  WrapperFiltersOffersDesktop,
  WrapperFiltersOffersMobile,
} from "@/pages/[drzava]/[smestuvanjeTip]";
import { Arrangements } from "@/types/data";
import Slider from "@mui/material/Slider";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Accordion,
  Col,
  Container,
  Form,
  InputGroup,
  Offcanvas,
  Row,
} from "react-bootstrap";

interface Props {
  arrangements: Arrangements[];
}

const MkCitiesOrAdventures: NextPage<Props> = ({ arrangements }) => {
  const [priceValue, setPriceValue] = useState([0, 500]);
  const [filteredArrangements, setFilteredArrangements] =
    useState(arrangements);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPriceValue(newValue as number[]);
  };

  useEffect(() => {
    setFilteredArrangements(arrangements);
  }, [arrangements]);

  function handleFilterPrice() {
    const lowPrice = priceValue[0];
    const HighPrice = priceValue[1];

    const filtered = arrangements.filter((arrangement) => {
      const minPrice = getMinPriceForArrangement(arrangement);

      return minPrice >= lowPrice && minPrice <= HighPrice;
    });

    setFilteredArrangements(filtered);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Градови и излети</title>
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
        imgSrc="/images/banner-mk.jpg"
        showSearchBarInBanner={false}
      />

      <div className="w90 section-divider">
        <SectionTitle title={`Македонија ${router.query.gradoviIzleti}`} />

        <WrapperFiltersOffersDesktop>
          <div className="filters">
            <SearchBar />
            <CalendarComponent />
            <FiltersAccordion defaultActiveKey="0" alwaysOpen>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Цена</Accordion.Header>
                <Accordion.Body>
                  <div className="range-text-wrap d-flex justify-content-between ">
                    <InputGroup.Text>0</InputGroup.Text>
                    <InputGroup.Text>1000</InputGroup.Text>
                  </div>
                  <Slider
                    getAriaLabel={() => "Price range"}
                    value={priceValue}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    disableSwap
                    min={0}
                    max={1000}
                  />
                  <PrimaryButtonStyle
                    type="button"
                    onClick={() => {
                      handleFilterPrice();
                      handleClose();
                    }}
                  >
                    Пребарувај по цена
                  </PrimaryButtonStyle>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Тип сместување</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <InputGroup className="mb-3">
                        <InputGroup.Radio
                          onClick={() => {
                            router.push({
                              href: "istrazi-ja-makedonija",
                              query: { gradoviIzleti: "Градови" },
                            });
                          }}
                          name="radioCitiesMkType"
                          aria-label="Radio for following text input"
                        />
                        <InputGroup.Text>Градови</InputGroup.Text>
                      </InputGroup>
                    </li>
                    <li>
                      <InputGroup className="mb-3">
                        <InputGroup.Radio
                          onClick={() => {
                            router.push({
                              href: "istrazi-ja-makedonija",
                              query: { gradoviIzleti: "Излети" },
                            });
                          }}
                          name="radioCitiesMkType"
                          aria-label="Radio for following text input"
                        />
                        <InputGroup.Text>Излети</InputGroup.Text>
                      </InputGroup>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </FiltersAccordion>
          </div>
          <div className="offers">
            {filteredArrangements.length > 0 ? (
              <Container>
                <Row>
                  {filteredArrangements?.map((arrangement) => {
                    return (
                      <Col
                        className="mb-3"
                        key={arrangement.Id}
                        xs={12}
                        md={6}
                        lg={6}
                        xl={4}
                      >
                        <CardOffer arrangement={arrangement} />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            ) : (
              <div className="h-100 d-flex justify-content-center align-items-center ">
                <NoOffersComponent />
              </div>
            )}
          </div>
        </WrapperFiltersOffersDesktop>

        <WrapperFiltersOffersMobile>
          <div className="search-bar-wrapper">
            <SearchBar />
          </div>
          <div className="filter-btn-opener">
            <button className="filter-btn" onClick={handleShow}>
              <img src="/images/filter-btn.png" alt="Filter button image" />
            </button>
          </div>
          {filteredArrangements.length > 0 ? (
            <ContainerArrangements arrangements={filteredArrangements} />
          ) : (
            <NoOffersComponent />
          )}
        </WrapperFiltersOffersMobile>
      </div>
      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Изберете филтри</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FiltersAccordion
            defaultActiveKey="0"
            alwaysOpen
            className="d-lg-none"
          >
            <CalendarComponent />

            <Accordion.Item eventKey="1">
              <Accordion.Header>Цена</Accordion.Header>
              <Accordion.Body>
                <div className="range-text-wrap d-flex justify-content-between ">
                  <InputGroup.Text>0</InputGroup.Text>
                  <InputGroup.Text>1000</InputGroup.Text>
                </div>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={priceValue}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  disableSwap
                  min={0}
                  max={1000}
                />
                <PrimaryButtonStyle
                  type="button"
                  onClick={() => {
                    handleFilterPrice();
                    handleClose();
                  }}
                >
                  Пребарувај по цена
                </PrimaryButtonStyle>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Тип сместување</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <InputGroup className="mb-3">
                      <InputGroup.Radio
                        onClick={() => {
                          router.push({
                            href: "istrazi-ja-makedonija",
                            query: { gradoviIzleti: "Градови" },
                          });
                          handleClose();
                        }}
                        name="radioCitiesMk"
                        aria-label="Radio for following text input"
                      />
                      <InputGroup.Text>Градови</InputGroup.Text>
                    </InputGroup>
                  </li>
                  <li>
                    <InputGroup className="mb-3">
                      <InputGroup.Radio
                        onClick={() => {
                          router.push({
                            href: "istrazi-ja-makedonija",
                            query: { gradoviIzleti: "Излети" },
                          });
                          handleClose();
                        }}
                        name="radioCitiesMk"
                        aria-label="Radio for following text input"
                      />
                      <InputGroup.Text>Излети</InputGroup.Text>
                    </InputGroup>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </FiltersAccordion>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MkCitiesOrAdventures;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const type = query.gradoviIzleti;

  let link: string;

  if (type) {
    link = `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=Македонија&Type_like=${type}`;
  } else {
    link =
      "https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=Македонија";
  }

  try {
    const res = await fetch(link);
    const arrangements: Arrangements[] = await res.json();

    return {
      props: { arrangements },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
