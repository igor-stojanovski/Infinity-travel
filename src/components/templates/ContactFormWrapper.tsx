import React from "react";
import ContactForm from "../elements/ContactForm";
import FooterInfoWithoutLinksComponent from "../elements/FooterInfoWithoutLinksComponent";
import styled from "@emotion/styled";

const ContactFormWrapper = () => {
  return (
    <ContactFormWrapperStyle>
      <div className="form">
        <ContactForm />
      </div>
      <div className="form-info">
        <FooterInfoWithoutLinksComponent />
      </div>
    </ContactFormWrapperStyle>
  );
};

export default ContactFormWrapper;

const ContactFormWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .form,
    .form-info {
      flex-basis: 40%;
    }
  }

  @media (min-width: 1000px) {
    justify-content: space-between;
    align-items: center;

    .btn-wrapper-form {
      width: 50%;
      margin-left: auto;
    }
  }
`;
