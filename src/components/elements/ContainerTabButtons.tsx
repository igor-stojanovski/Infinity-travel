import React from "react";
import TabButton from "./TabButton";
import styled from "@emotion/styled";

interface Props {
  nameToFilterBy: (string | undefined)[];
  pageNameButtonAt: string;
}

const ContainerTabButtons: React.FC<Props> = ({
  nameToFilterBy,
  pageNameButtonAt,
}) => {
  return (
    <ContainerTabButtonsStyle className="section-divider">
      {nameToFilterBy?.map((menuTab) => {
        return (
          <span
            key={menuTab}
            className={`tab-wrapper ${
              nameToFilterBy.length > 5 ? "me-md-3" : ""
            } `}
          >
            <TabButton
              filterName={menuTab}
              pageNameButtonAt={pageNameButtonAt}
            />
          </span>
        );
      })}
      {nameToFilterBy.length > 0 && (
        <span className="tab-wrapper">
          <TabButton
            filterName="Last minute"
            pageNameButtonAt={pageNameButtonAt}
          />
        </span>
      )}
    </ContainerTabButtonsStyle>
  );
};

export default ContainerTabButtons;

const ContainerTabButtonsStyle = styled.div`
  overflow: auto;
  white-space: nowrap;

  .tab-wrapper:not(:last-child) {
    margin-right: 12px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 400px) {
    .tab-wrapper:not(:last-child) {
      margin-right: 24px;
    }
  }

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;

    .tab-wrapper:not(:last-child) {
      margin-right: 0px;
    }
  }
`;
