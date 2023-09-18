import { PrimaryButtonStyle } from "@/components/buttons/PrimaryButton";
import SearchBar from "@/components/buttons/SearchBar";
import CalendarComponent from "@/components/elements/CalendarComponent";
import CardOffer from "@/components/elements/Card";
import HeroSection from "@/components/elements/HeroSection";
import NoOffersComponent from "@/components/elements/NoOffersComponent";
import SectionTitle from "@/components/elements/SectionTitle";
import ContainerArrangements from "@/components/templates/ContainerArrangements";
import { getMinPriceForArrangement } from "@/helpers/getMinPriceForArrangement";
import { Arrangements } from "@/types/data";
import styled from "@emotion/styled";
import Slider from "@mui/material/Slider";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Accordion,
  Col,
  Container,
  InputGroup,
  Offcanvas,
  Row,
} from "react-bootstrap";

interface Props {
  arrangements: Arrangements[];
}

const ApartmentOrHotel: NextPage<Props> = ({ arrangements }) => {
  const [priceValue, setPriceValue] = useState([0, 500]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPriceValue(newValue as number[]);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();

  const [filteredArrangements, setFilteredArrangements] =
    useState(arrangements);

  function handleFilterPrice() {
    const lowPrice = priceValue[0];
    const HighPrice = priceValue[1];

    const filtered = arrangements.filter((arrangement) => {
      const minPrice = getMinPriceForArrangement(arrangement);

      return minPrice >= lowPrice && minPrice <= HighPrice;
    });

    setFilteredArrangements(filtered);
  }

  useEffect(() => {
    setFilteredArrangements(arrangements);
  }, [arrangements]);

  return (
    <div>
       <Head>
        <title>Дестинации</title>
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
        imgSrc="/images/banner-countries.jpg"
        showSearchBarInBanner={false}
      />

      <div className="w90 section-divider">
        <SectionTitle
          title={`${router.query.drzava} ${router.query.smestuvanjeTip}`}
        />

        <WrapperFiltersOffersDesktop>
          <div className="filters">
            <SearchBar />
            <CalendarComponent />
            <FiltersAccordion defaultActiveKey="0" alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Дестинации</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <InputGroup className="mb-3">
                        <InputGroup.Radio
                          name="radioGroupDestinations"
                          onClick={() => {
                            router.push({
                              query: {
                                ...router.query,
                                drzava: "Грција",
                              },
                            });
                          }}
                          aria-label="Radio for following text input"
                        />
                        <InputGroup.Text>Грција</InputGroup.Text>
                      </InputGroup>
                    </li>
                    <li>
                      <InputGroup className="mb-3">
                        <InputGroup.Radio
                          name="radioGroupDestinations"
                          onClick={() => {
                            router.push({
                              query: { ...router.query, drzava: "Турција" },
                            });
                          }}
                          aria-label="Radio for following text input"
                        />
                        <InputGroup.Text>Турција</InputGroup.Text>
                      </InputGroup>
                    </li>
                    <li>
                      <InputGroup className="mb-3">
                        <InputGroup.Radio
                          name="radioGroupDestinations"
                          onClick={() => {
                            router.push({
                              query: { ...router.query, drzava: "Хрватска" },
                            });
                          }}
                          aria-label="Radio for following text input"
                        />
                        <InputGroup.Text>Хрватска</InputGroup.Text>
                      </InputGroup>
                    </li>
                    <li>
                      <InputGroup className="mb-3">
                        <InputGroup.Radio
                          name="radioGroupDestinations"
                          onClick={() => {
                            router.push({
                              query: { ...router.query, drzava: "Албанија" },
                            });
                          }}
                          aria-label="Radio for following text input"
                        />
                        <InputGroup.Text>Албанија</InputGroup.Text>
                      </InputGroup>
                    </li>
                    <li>
                      <InputGroup className="mb-3">
                        <InputGroup.Radio
                          name="radioGroupDestinations"
                          onClick={() => {
                            router.push({
                              query: { ...router.query, drzava: "Египет" },
                            });
                          }}
                          aria-label="Radio for following text input"
                        />
                        <InputGroup.Text>Египет</InputGroup.Text>
                      </InputGroup>
                    </li>
                    <li>
                      <InputGroup className="mb-3">
                        <InputGroup.Radio
                          name="radioGroupDestinations"
                          onClick={() => {
                            router.push({
                              query: { ...router.query, drzava: "Италија" },
                            });
                          }}
                          aria-label="Radio for following text input"
                        />
                        <InputGroup.Text>Италија</InputGroup.Text>
                      </InputGroup>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
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
                  <PrimaryButtonStyle type="button" onClick={handleFilterPrice}>
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
                          name="radioGroupDestinationsType"
                          onClick={() => {
                            router.push({
                              query: {
                                ...router.query,
                                smestuvanjeTip: "Апартмани",
                              },
                            });
                          }}
                          aria-label="Radio for following text input"
                        />
                        <InputGroup.Text>Апартмани</InputGroup.Text>
                      </InputGroup>
                    </li>
                    <li>
                      <InputGroup className="mb-3">
                        <InputGroup.Radio
                          name="radioGroupDestinationsType"
                          onClick={() => {
                            router.push({
                              query: {
                                ...router.query,
                                smestuvanjeTip: "Хотели",
                              },
                            });
                          }}
                          aria-label="Radio for following text input"
                        />
                        <InputGroup.Text>Хотели</InputGroup.Text>
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
                  {filteredArrangements.map((arrangement) => {
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
            <button
              className="filter-btn"
              onClick={() => {
                handleShow();
              }}
            >
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
            <Accordion.Item eventKey="0">
              <Accordion.Header>Дестинации</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <InputGroup className="mb-3">
                      <InputGroup.Radio
                        name="radioGroupDestinations"
                        onClick={() => {
                          router.push({
                            query: {
                              ...router.query,
                              drzava: "Грција",
                            },
                          });
                          handleClose();
                        }}
                        aria-label="Radio for following text input"
                      />
                      <InputGroup.Text>Грција</InputGroup.Text>
                    </InputGroup>
                  </li>
                  <li>
                    <InputGroup className="mb-3">
                      <InputGroup.Radio
                        name="radioGroupDestinations"
                        onClick={() => {
                          router.push({
                            query: { ...router.query, drzava: "Турција" },
                          });
                          handleClose();
                        }}
                        aria-label="Radio for following text input"
                      />
                      <InputGroup.Text>Турција</InputGroup.Text>
                    </InputGroup>
                  </li>
                  <li>
                    <InputGroup className="mb-3">
                      <InputGroup.Radio
                        name="radioGroupDestinations"
                        onClick={() => {
                          router.push({
                            query: { ...router.query, drzava: "Хрватска" },
                          });
                          handleClose();
                        }}
                        aria-label="Radio for following text input"
                      />
                      <InputGroup.Text>Хрватска</InputGroup.Text>
                    </InputGroup>
                  </li>
                  <li>
                    <InputGroup className="mb-3">
                      <InputGroup.Radio
                        name="radioGroupDestinations"
                        onClick={() => {
                          router.push({
                            query: { ...router.query, drzava: "Албанија" },
                          });
                          handleClose();
                        }}
                        aria-label="Radio for following text input"
                      />
                      <InputGroup.Text>Албанија</InputGroup.Text>
                    </InputGroup>
                  </li>
                  <li>
                    <InputGroup className="mb-3">
                      <InputGroup.Radio
                        name="radioGroupDestinations"
                        onClick={() => {
                          router.push({
                            query: { ...router.query, drzava: "Египет" },
                          });
                          handleClose();
                        }}
                        aria-label="Radio for following text input"
                      />
                      <InputGroup.Text>Египет</InputGroup.Text>
                    </InputGroup>
                  </li>
                  <li>
                    <InputGroup className="mb-3">
                      <InputGroup.Radio
                        name="radioGroupDestinations"
                        onClick={() => {
                          router.push({
                            query: { ...router.query, drzava: "Италија" },
                          });
                          handleClose();
                        }}
                        aria-label="Radio for following text input"
                      />
                      <InputGroup.Text>Италија</InputGroup.Text>
                    </InputGroup>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
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
                            query: {
                              ...router.query,
                              smestuvanjeTip: "Апартмани",
                            },
                          });
                          handleClose();
                        }}
                        name="radioCitiesMk"
                        aria-label="Radio for following text input"
                      />
                      <InputGroup.Text>Апартмани</InputGroup.Text>
                    </InputGroup>
                  </li>
                  <li>
                    <InputGroup className="mb-3">
                      <InputGroup.Radio
                        onClick={() => {
                          router.push({
                            query: {
                              ...router.query,
                              smestuvanjeTip: "Хотели",
                            },
                          });
                          handleClose();
                        }}
                        name="radioCitiesMk"
                        aria-label="Radio for following text input"
                      />
                      <InputGroup.Text>Хотели</InputGroup.Text>
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

export default ApartmentOrHotel;

export const WrapperFiltersOffersMobile = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .search-bar-wrapper {
    flex-basis: 80%;
  }
  .filter-btn-opener {
    flex-basis: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    & button {
      background-color: transparent;
      border: none;
    }
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const WrapperFiltersOffersDesktop = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;

    .filters {
      flex-basis: 30%;
      padding: 12px;
      background-color: rgb(244, 251, 251);
      display: flex;
      flex-direction: column;
    }
    .offers {
      flex-basis: 70%;
      margin: 0 auto;
    }
  }
`;

export const FiltersAccordion = styled(Accordion)`
  --bs-accordion-bg: transparent;
  --bs-accordion-border-radius: none;
  --bs-accordion-inner-border-radius: none;
  --bs-accordion-border-color: none;

  & .input-group-text {
    background-color: transparent;
    border: none;
  }

  .accordion-button {
    background-color: transparent;
    border-top: 1px solid #21b0b7;
    border-bottom: 1px solid #21b0b7;
  }

  .form-check-input:checked {
    background-color: var(--tertiary-color);
    border-color: var(--tertiary-color);
  }

  & input[type="range"]::-webkit-slider-thumb {
    background-color: #ffcc16;
  }

  & input[type="range"]::-webkit-slider-runnable-track {
    background-color: #21b0b7;
  }
`;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const country = query.drzava;
  const type = query.smestuvanjeTip;

  let link: string;

  if (country && type) {
    link = `https://trapezoidal-sharp-quark.glitch.me/arrangements?Location.Country_like=${country}&Type_like=${type}`;
  } else {
    link = "https://trapezoidal-sharp-quark.glitch.me/arrangements";
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
