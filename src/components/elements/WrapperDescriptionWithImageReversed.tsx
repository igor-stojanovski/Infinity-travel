import React from "react";
import DescriptionWithTitleComponent from "./DescriptionWithTitleComponent";
import styled from "@emotion/styled";
import { WrapperDescriptionWithImageStyle } from "./WrapperDescriptionWithImage";

interface Props {
  title: string;
  description: string;
  image: string;
}

const WrapperDescriptionWithImageReversed: React.FC<Props> = ({
  title,
  description,
  image,
}) => {
  return (
    <WrapperDescriptionWithImageReversedStyle>
      <div className="img-wrapper p-3">
        <img src={`${image}`} alt="Group image" />
      </div>
      <DescriptionWithTitleComponent
        title={`${title}`}
        description={`${description}`}
      />
    </WrapperDescriptionWithImageReversedStyle>
  );
};

export default WrapperDescriptionWithImageReversed;

export const WrapperDescriptionWithImageReversedStyle = styled(
  WrapperDescriptionWithImageStyle
)`
  flex-direction: column-reverse;
`;
