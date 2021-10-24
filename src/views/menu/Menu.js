import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import Title from "../login/components/title/Title";

const Menu = () => {
  return (
    <div className="container">
      {/* <Title className="clase" text="Menu" /> */}
      <h1 className="title"> Menu</h1>

      <Link to="/Ventas">
        {" "}
        <button className="btn">Ventas</button>
      </Link>
      <Link to="/Products">
        <button className="btn">Productos</button>
      </Link>
      <Link to="/Update">
        <button className="btn">Usuarios</button>
      </Link>
    </div>
  );
};

export default Menu;
