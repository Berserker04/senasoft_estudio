import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Detail() {
  const [person, setPerson] = useState({
    id: 0,
    name: "",
    species: "",
    image: "",
  });

  const { id } = useParams();

  const getPerson = useCallback(async () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        setPerson(data);
      });
  }, []);

  useEffect(() => {
    getPerson();
  }, [getPerson]);

  return (
    <div className="container">
      {/* <h1>{person.name}</h1> */}
      <div key={person.id} className="card" style={{ width: "18rem" }}>
        <img src={person.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{person.name}</h5>
          <p className="card-text">
            Especie: <span>{person.species}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
