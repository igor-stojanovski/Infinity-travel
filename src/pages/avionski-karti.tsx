import AirplaneTicketsForm from "@/components/elements/AirplaneTicketsForm";
import ContactForm from "@/components/elements/ContactForm";
import HeroSection from "@/components/elements/HeroSection";
import SectionTitle from "@/components/elements/SectionTitle";

import { NextPage } from "next";
import React, { useState } from "react";

const AirplaneTickets: NextPage = () => {
  const [isAirplaneTicketsDataCollected, setisAirplaneTicketsDataCollected] =
    useState(false);

  function changeForm() {
    setisAirplaneTicketsDataCollected(true);
  }

  const [airplaneTicketsFormData, setAirplaneTicketsFormData] = useState({
    povratenBilet: "",
    od: "",
    do: "",
    datumPoaganje: "",
    datumVrakanje: "",
    vozrasni: 0,
    deca: 0,
    bebinja: 0,
    klasa: "",
  });

  return (
    <div>
      <HeroSection
        imgSrc="/images/banner-airplane-tickets.jpg"
        showSearchBarInBanner={false}
      />
      <div className="w90 section-divider">
        <SectionTitle title="Авионски карти" />
        {isAirplaneTicketsDataCollected ? (
          <div className="w-50 mx-auto">
            <ContactForm airplaneTicketsFormData={airplaneTicketsFormData} />
          </div>
        ) : (
          <AirplaneTicketsForm
            changeForm={changeForm}
            setAirplaneTicketsFormData={setAirplaneTicketsFormData}
            airplaneTicketsFormData={airplaneTicketsFormData}
          />
        )}
      </div>
    </div>
  );
};

export default AirplaneTickets;
