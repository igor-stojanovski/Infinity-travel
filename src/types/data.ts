interface Location {
  City?: string;
  Address?: string;
  Country: string;
  Region?: string;
}

export interface Image {
  Id: string;
  url: string;
  Thumbnail: string;
  Location: Location;
  Description: string;
}

type State = "Free" | "Reserved" | "Busy";

interface Price {
  Prices: PricesType[];
  LastMinutePrices: number[];
}

interface PricesType {
  id: string;
  dateAvailable: string;
  price: number;
  nights: number;
}

export interface Arrangements {
  Id: string;
  Name: string;
  Description: string;
  Description2?: string;
  Location: Location;
  TransportationDescription: string;
  Gallery: Image[];
  Type: string;
  Prices: Price[];
  AvailabilityDates: Date[];
  PriceForNights: number;
  State: State[];
  IsPublished: boolean;
  IsLastMinute: boolean;
  Rating?: number;
  Miscellanies?: string[];
}

export interface Testimonials {
  Id: string;
  Title: string;
  Rating: number;
  url: string;
  Description: string;
  Arrangement: string;
}

export type airplaneTicketsFormDataType = {
  povratenBilet: string;
  od: string;
  do: string;
  datumPoaganje: string;
  datumVrakanje: string;
  vozrasni: number;
  deca: number;
  bebinja: number;
  klasa: string;
};
