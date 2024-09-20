import { useEffect, useReducer } from 'react';
import { fetchReducer, INITIAL_STATE } from '../reducers/fetchReducer';
import { getApiInfo } from '../service/axios';
import { CharacterApiResult } from '../types/character';
import { LocationApiResult } from '../types/location';
import { Info } from '../types';

function useFetch<T> (endpoint: string) {
  const [state, dispatch] = useReducer(fetchReducer, INITIAL_STATE);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'LOADING', payload: true });
      try {
        const response = await getApiInfo(`${endpoint}?page=${state.page}`);
        const data = response.data as {
          results: CharacterApiResult[] | LocationApiResult[];
          info: Info;
        };
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: {
            data: data.results,
            info: data.info
          }
        });
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [endpoint, state.page]);

  const setPage = (page: number) => {
    dispatch({ type: 'SET_PAGE', payload: page });
  };

  return {
    data: state.data as T[],
    apiInfo: state.apiInfo,
    loading: state.loading,
    page: state.page,
    setPage
  };
}

export { useFetch };