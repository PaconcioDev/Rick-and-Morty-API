import { CharacterApiResult } from "../models/character.model";

type CharacterListProps = {
  character: CharacterApiResult;
};

type PageProps = {
  page: number;
  setPage: any;
  prevOrNext?: "prev" | "next";
};

export type { CharacterListProps, PageProps };
