import { FetchReducerAction, FetchReducerInitialState } from '../types/reducers';

const INITIAL_STATE: FetchReducerInitialState = {
  data: [],
  apiInfo: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  loading: true,
  page: 1,
};

const fetchReducer = (state: FetchReducerInitialState, action: FetchReducerAction) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
        loading: true
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload.data,
        apiInfo: action.payload.info,
        loading: false,
      };
  }
};

export { INITIAL_STATE, fetchReducer };