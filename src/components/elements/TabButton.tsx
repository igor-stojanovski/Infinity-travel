import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  filterName: string | undefined;
  pageNameButtonAt: string;
}

const TabButton: React.FC<Props> = ({ filterName, pageNameButtonAt }) => {
  const router = useRouter();

  // homepage

  if (pageNameButtonAt === "pocetna") {
    return filterName !== "Last minute" ? (
      <TabButtonStyle
        className={
          router.query.region === filterName ? "active-filter-btn" : ""
        }
        onClick={() => {
          {
            router.query.region === filterName
              ? router.push({
                  query: {},
                })
              : router.push({
                  query: {
                    region: filterName,
                  },
                });
          }
        }}
      >
        {filterName}
      </TabButtonStyle>
    ) : (
      <TabButtonStyle
        className={router.query.IsLastMinute ? "active-filter-btn" : ""}
        onClick={() => {
          {
            router.query.IsLastMinute
              ? router.push({
                  query: {},
                })
              : router.push({
                  query: {
                    IsLastMinute: true,
                  },
                });
          }
        }}
      >
        {filterName}
      </TabButtonStyle>
    );
  }

  // countries page apartments

  if (pageNameButtonAt === "countriesApartments") {
    return filterName !== "Last minute" ? (
      <TabButtonStyle
        className={
          router.query.apartmentsRegion === filterName
            ? "active-filter-btn"
            : ""
        }
        onClick={() => {
          {
            router.query.apartmentsRegion === filterName
              ? (delete router.query.apartmentsRegion,
                router.push({
                  query: {
                    ...router.query,
                  },
                }))
              : (delete router.query.isLastMinuteApartments,
                router.push({
                  query: {
                    ...router.query,
                    apartmentsRegion: filterName,
                  },
                }));
          }
        }}
      >
        {filterName}
      </TabButtonStyle>
    ) : (
      <TabButtonStyle
        className={
          router.query.isLastMinuteApartments ? "active-filter-btn" : ""
        }
        onClick={() => {
          {
            router.query.isLastMinuteApartments
              ? (delete router.query.isLastMinuteApartments,
                router.push({
                  query: {
                    ...router.query,
                  },
                }))
              : (delete router.query.apartmentsRegion,
                router.push({
                  query: {
                    ...router.query,
                    isLastMinuteApartments: true,
                  },
                }));
          }
        }}
      >
        {filterName}
      </TabButtonStyle>
    );
  }

  //  countries hotels

  if (pageNameButtonAt === "countriesHotels") {
    return filterName !== "Last minute" ? (
      <TabButtonStyle
        className={
          router.query.hotelsRegion === filterName ? "active-filter-btn" : ""
        }
        onClick={() => {
          {
            router.query.hotelsRegion === filterName
              ? (delete router.query.hotelsRegion,
                router.push({
                  query: {
                    ...router.query,
                  },
                }))
              : (delete router.query.isLastMinuteHotels,
                router.push({
                  query: {
                    ...router.query,
                    hotelsRegion: filterName,
                  },
                }));
          }
        }}
      >
        {filterName}
      </TabButtonStyle>
    ) : (
      <TabButtonStyle
        className={router.query.isLastMinuteHotels ? "active-filter-btn" : ""}
        onClick={() => {
          {
            router.query.isLastMinuteHotels
              ? (delete router.query.isLastMinuteHotels,
                router.push({
                  query: {
                    ...router.query,
                  },
                }))
              : (delete router.query.hotelsRegion,
                router.push({
                  query: {
                    ...router.query,
                    isLastMinuteHotels: true,
                  },
                }));
          }
        }}
      >
        {filterName}
      </TabButtonStyle>
    );
  }

  // explore mk

  if (pageNameButtonAt === "explore-macedonia") {
    return filterName !== "Last minute" ? (
      <TabButtonStyle
        className={
          router.query.region === filterName ? "active-filter-btn" : ""
        }
        onClick={() => {
          {
            router.query.region === filterName
              ? (delete router.query.region,
                router.push({
                  query: {
                    ...router.query,
                  },
                }))
              : (delete router.query.isLastMinute,
                router.push({
                  query: {
                    ...router.query,
                    region: filterName,
                  },
                }));
          }
        }}
      >
        {filterName}
      </TabButtonStyle>
    ) : (
      <TabButtonStyle
        className={router.query.isLastMinute ? "active-filter-btn" : ""}
        onClick={() => {
          {
            router.query.isLastMinute
              ? (delete router.query.isLastMinute,
                router.push({
                  query: {
                    ...router.query,
                  },
                }))
              : (delete router.query.region,
                router.push({
                  query: {
                    ...router.query,
                    isLastMinute: true,
                  },
                }));
          }
        }}
      >
        {filterName}
      </TabButtonStyle>
    );
  }

  // exotic travels
  if (pageNameButtonAt === "exotic-travels") {
    return filterName !== "Last minute" ? (
      <TabButtonStyle
        className={
          router.query.region === filterName ? "active-filter-btn" : ""
        }
        onClick={() => {
          {
            router.query.region === filterName
              ? (delete router.query.region,
                router.push({
                  query: {
                    ...router.query,
                  },
                }))
              : (delete router.query.isLastMinute,
                router.push({
                  query: {
                    ...router.query,
                    region: filterName,
                  },
                }));
          }
        }}
      >
        {filterName}
      </TabButtonStyle>
    ) : (
      <TabButtonStyle
        className={router.query.isLastMinute ? "active-filter-btn" : ""}
        onClick={() => {
          {
            router.query.isLastMinute
              ? (delete router.query.isLastMinute,
                router.push({
                  query: {
                    ...router.query,
                  },
                }))
              : (delete router.query.region,
                router.push({
                  query: {
                    ...router.query,
                    isLastMinute: true,
                  },
                }));
          }
        }}
      >
        {filterName}
      </TabButtonStyle>
    );
  }
};

export default TabButton;

const TabButtonStyle = styled.button`
  font-size: 16px;
  padding: 8px 24px;
  border: 2px solid var(--tertiary-color);
  background-color: white;
  transition: all ease-in-out 0.3s;

  @media (min-width: 1000px) {
    font-size: 26px;
  }

  &:hover {
    opacity: 0.8;
    background-color: var(--tertiary-color);
  }
`;
