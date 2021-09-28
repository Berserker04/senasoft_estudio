import React, { useState } from "react";

export default function Calculadora() {
  const [{ form, total }, setSuma] = useState({
    form: {
      num1: 0,
      num2: 0,
    },
    total: [],
  });

  const onChangeHandle = ({ target }) => {
    const { name, value } = target;
    form[name] = value;
    setSuma({
      form,
      total,
    });
  };

  const sumar = () => {
    const { num1, num2 } = form;
    total.push(parseInt(num1) + parseInt(num2));
    setSuma({
      form: {
        num1: 0,
        num2: 0,
      },
      total,
    });
  };

  return (
    <div>
      <h1 className="text-center">Sumadora</h1>
      <form>
        <div className="col">
          <label htmlFor=""> Número 1</label>
          <input
            className="form-control"
            type="number"
            placeholder="Número 1"
            name="num1"
            value={form.num1}
            onChange={onChangeHandle}
          />
        </div>
        <div className="col">
          <label htmlFor=""> Número 2</label>
          <input
            className="form-control"
            type="number"
            placeholder="Número 2"
            name="num2"
            value={form.num2}
            onChange={onChangeHandle}
          />
        </div>
        <br />
        <button
          onClick={() => sumar()}
          type="button"
          className="btn btn-success"
        >
          Sumar
        </button>
      </form>
      <h2>Resulados</h2>
      <ul>
        {!total.length && <span>Lista vacia</span>}
        {total.map((suma, index) => (
          <li key={index}>
            <span>{suma}</span>
          </li>
        ))}
      </ul>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Suma</th>
          </tr>
        </thead>
        <tbody>
          {!total.length && <span>Lista vacia</span>}
          {total.map((suma, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{suma}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
