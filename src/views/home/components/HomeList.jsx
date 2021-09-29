import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomeList() {
  const [people, setPeople] = useState([]);

  const getPeople = useCallback(async () => {
    await axios
      .get("https://rickandmortyapi.com/api/character")
      .then(({ data }) => {
        setPeople(data.results);
      })
      .catch((e) => console.log(e));
  }, [setPeople]);

  useEffect(() => {
    getPeople();
  }, [getPeople]);

  return (
    <div className="row">
      {people.map((item) => (
        <div key={item.id} className="card" style={{ width: "18rem" }}>
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              Especie: <span>{item.species}</span>
            </p>
            <Link to={`/datail/${item.id}`} className="btn btn-primary">
              Ver detalle
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
