import React from "react";
import Calculadora from "../../components/Calculadora";
import HomeList from "./components/HomeList";

export default function HomeView() {
  return (
    <div className="container">
      <Calculadora />
      <HomeList/>
    </div>
  );
}
