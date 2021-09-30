import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startGetPeople } from "../../../redux/actions/people";
import { useSelector } from "react-redux";

export default function HomeList() {
  const dispatch = useDispatch();
  const { filterPeople } = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(startGetPeople());
  }, []);

  return (
    <div className="row">
      {filterPeople.map((item) => (
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
