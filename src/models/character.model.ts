type CharacterApi = {
  data: CharacterApiData;
};

type CharacterApiData = {
  info: CharacterApiInfo;
  results: CharacterApiResult[];
};

type CharacterApiInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

type CharacterApiResult = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterApiResultGeoraphy;
  location: CharacterApiResultGeoraphy;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type CharacterApiResultGeoraphy = {
  name: string;
  url: string;
};

export type { CharacterApi, CharacterApiResult, CharacterApiInfo };
