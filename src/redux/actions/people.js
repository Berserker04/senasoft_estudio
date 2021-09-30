import axios from "axios";
import { GET_PEOPLE, GET_FILTER_PEOPLE } from "../constans";

export const setPeople = (people) => ({
  type: GET_PEOPLE,
  payload: people,
});

export const setFilterPeople = (people) => ({
  type: GET_FILTER_PEOPLE,
  payload: people,
});

export const startGetPeople = () => async (dispatch) => {
  await axios
    .get("https://rickandmortyapi.com/api/character")
    .then(({ data }) => {
      dispatch(setPeople(data.results));
      dispatch(setFilterPeople(data.results));
    })
    .catch((e) => console.log(e));
};
