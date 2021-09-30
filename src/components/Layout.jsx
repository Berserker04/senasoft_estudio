import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setFilterPeople } from "../redux/actions/people";

export default function Layout({ children }) {
  const { people } = useSelector((state) => state.people);
  const dispatch = useDispatch();

  const filterPeople = (value) => {
    const filter = people.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filter);
    dispatch(setFilterPeople(filter));
  };

  return (
    <div className="container">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link"
                    aria-current="page"
                    to="/"
                  >
                    Inicio
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    aria-current="page"
                    to="/home2"
                  >
                    Inicio 2
                  </NavLink>
                </li> */}
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={({ target }) => filterPeople(target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  Buscar...
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      {children}
      <footer>FOOTER</footer>
    </div>
  );
}
