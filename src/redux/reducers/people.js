import { GET_PEOPLE, GET_FILTER_PEOPLE } from "../constans";

const initialState = {
  people: [],
  filterPeople: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return { ...state, people: action.payload };
    case GET_FILTER_PEOPLE:
      return { ...state, filterPeople: action.payload };
    default:
      return state;
  }
};
