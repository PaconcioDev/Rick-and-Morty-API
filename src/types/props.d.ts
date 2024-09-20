import { CharacterApiResult } from "../character";
import { LocationApiResult } from './location';

type CharacterListProps = {
  character: CharacterApiResult;
};

type LocationListProps = {
  location: LocationApiResult;
};

type LayoutProps = {
  loading: boolean;
  page: number;
  pages: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  children: React.ReactNode;
};

type PageProps = {
  page: number;
  pages?: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  prevOrNext?: "prev" | "next";
};

export type { CharacterListProps, LocationListProps, LayoutProps, PageProps };
