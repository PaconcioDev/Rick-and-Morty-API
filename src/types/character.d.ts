import { Info } from '.';

type CharacterApiResultGeography = {
  name: string;
  url: string;
};

type CharacterApiResult = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterApiResultGeography;
  location: CharacterApiResultGeography;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type CharacterApiData = {
  info: Info;
  results: CharacterApiResult[];
};

type CharacterApi = {
  data: CharacterApiData;
};

export type { CharacterApi, CharacterApiData, CharacterApiResult, CharacterApiInfo };
