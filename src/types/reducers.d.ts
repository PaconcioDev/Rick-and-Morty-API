import { Info } from '.';
import { CharacterApiResult } from './character';
import { LocationApiResult } from './location';

type FetchReducerInitialState = {
  data: CharacterApiResult[] | LocationApiResult[],
  apiInfo: Info,
  loading: boolean,
  page: number,
};

type FetchReducerAction =
  | { type: 'LOADING', payload: boolean; }
  | { type: 'SET_PAGE', payload: number; }
  | { type: 'FETCH_SUCCESS', payload: { data: LocationApiResult[] | CharacterApiResult[]; info: Info; }; };

export { FetchReducerInitialState, FetchReducerAction };