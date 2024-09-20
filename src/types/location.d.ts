import { Info } from '.';

type LocationApiResult = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

type LocationApiResponse = {
  info: Info;
  results: LocationApiResult[];
};

type Location = {
  data: LocationApiResponse;
};

export { Location, LocationApiResponse, LocationApiResult };