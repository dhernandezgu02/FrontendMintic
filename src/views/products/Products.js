import React, { useState } from "react";
import Title from "../login/components/title/Title";
// import { DataGrid } from "@mui/x-data-grid";
import "./Products.css";
import DataGrid from "../login/components/DataGrid/DataGrid";

const columns = [
  { field: "id", headerName: "ID", width: 120 },
  {
    field: "descripcion",
    headerName: "Descripcion",
    width: 170,
  },
  { field: "valorUnitario", headerName: "Valor Unitario", width: 170 },
  {
    field: "disponible",
    headerName: "Disponible",
    type: "number",
    width: 170,
  },
  {
    field: "opcion",
    headerName: "Opciones",
    sortable: false,
    width: 170,
    renderCell: (cellValues) => <button className="button"> editar </button>,
  },
];

const rows = [
  { id: 1, descripcion: "Snow", valorUnitario: "Jon", disponible: 35 },
  { id: 2, descripcion: "Lannister", valorUnitario: "Cersei", disponible: 42 },
  { id: 3, descripcion: "Lannister", valorUnitario: "Jaime", disponible: 45 },
  { id: 4, descripcion: "Stark", valorUnitario: "Arya", disponible: 16 },
  {
    id: 5,
    descripcion: "Targaryen",
    valorUnitario: "Daenerys",
    disponible: "null",
  },
  { id: 6, descripcion: "Melisandre", valorUnitario: "null", disponible: 150 },
  { id: 7, descripcion: "Clifford", valorUnitario: "Ferrara", disponible: 44 },
  { id: 8, descripcion: "Frances", valorUnitario: "Rossini", disponible: 36 },
  { id: 9, descripcion: "Roxie", valorUnitario: "Harvey", disponible: 65 },
];

const Products = () => {
  const [id, setId] = useState("");
  const [view, setView] = useState("table");
  const [description, setDescription] = useState("");
  const [available, setAvailable] = useState("");
  const [price, setPrice] = useState("");
  const setViewHandler = (key) => {
    setView(key);
  };
  const handleSubmit = (e) => {
    e.preveDefault();
    alert("EL REGISTRO SE HA COMPLETADO");
  };

  return (
    <div className="table_products">
      <h1 className="title"> Tabla Productos </h1>
      <div className="btn-div">
        <button onClick={() => setViewHandler("form")} className="btn1">
          Nuevo Producto
        </button>
        <button onClick={() => setViewHandler("table")} className="btn2">
          Ver Productos
        </button>
      </div>
      <div className="data">
        {view === "table" && <DataGrid rows={rows} columns={columns} />}
      </div>
      {/* {view === "form" && (
        <div className="form-div">
          <form className="products_form1" onSubmit={handleSubmit}>
            <label className="lbl1" htmlfor="nombre">
              {" "}
              Identificacion Producto:
            </label>
            <input
              className="inp1"
              type="text"
              id="nombre"
              name="nombre"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label className="lbl1" htmlFor="date">
              DESCRIPCION:
            </label>
            <input
              className="inp1"
              type="text"
              id="date"
              name="date"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />{" "}
            <br /> <br />
            <label className="lbl1" htmlFor="number">
              DISPONIBLE:
            </label>
            <input
              className="inp2"
              type="number"
              id="number"
              name="number"
              max="999999"
              required
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
            />
            <label className="lbl1" htmlFor="obs">
              PRECIO UNITARIO:
            </label>
            <input
              className="inp5"
              type="text"
              id="obs"
              name="obs"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />{" "}
            <br /> <br />
          </form>
        </div>
      )} */}
    </div>
  );
};
export default Products;
