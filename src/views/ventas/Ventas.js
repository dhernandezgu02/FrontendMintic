import { useState, useEffect } from "react";
import "./ventas.css";
import { DataGrid } from "@mui/x-data-grid";
// import { DataGrid } from '@material-ui/core';

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "valorTotal", headerName: "Valor Total Venta", width: 190 },
  { field: "idProducto", headerName: "Id Producto", width: 150, type: "text" },

  {
    field: "cant",
    headerName: "Cant",
    type: "number",
    width: 100,
    sortable: false,
  },
  {
    field: "precio",
    headerName: "Prec.Unit",
    type: "text",
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.getValue(params.id, "firstName") || ""} ${
    //     params.getValue(params.id, "lastName") || ""
    //   }`,
  },
  { field: "fecha", headerName: "Fecha", width: 130 },
  {
    field: "documento",
    headerName: "Doc.Cliente",
    width: 150,
    sortable: false,
  },
  {
    field: "nombreCliente",
    headerName: "Nombre Cliente",
    width: 150,
    sortable: false,
  },
  { field: "vendedor", headerName: "Vendedor", width: 140 },
];

export function Ventas() {
  const [change, setChange] = useState(false);
  const [sales, setSales] = useState([]);
  const [nombre, setNombre] = useState("asdasdas");
  const [date, setDate] = useState("2021-10-10");
  const [number, setNumber] = useState("525");
  const [obs, setObs] = useState("4564");
  const [cant, setCant] = useState("5");
  const [doc, setDoc] = useState("21354");
  const [total, setTotal] = useState("4554645654");
  const [vendor, setVendor] = useState("sofia");
  useEffect(() => {
    const initialize = async () => {
      try {
        const fetchResponse = await fetch("http://127.0.0.1:4000/sales");
        const response = await fetchResponse.json();
        // console.log(backendSales);
        const fetchedSales = response.sales;
        console.log("fetched sales", fetchedSales);
        const formatedSales = fetchedSales.map((fetchedSale) => {
          const formatedSale = {
            id: fetchedSale._id,
            idProducto: fetchedSale.id,
            valorTotal: fetchedSale.totalValue,
            cant: fetchedSale.quantity,
            precio: fetchedSale.unitPrice,
            fecha: fetchedSale.date,
            documento: fetchedSale.clientDoc,
            nombreCliente: fetchedSale.clientName,
            vendedor: fetchedSale.salesMan,
          };
          console.log(
            "fetched sale",
            fetchedSale,
            "formated sale",
            formatedSale
          );
          return formatedSale;
        });
        console.log("formated sales", formatedSales);
        setSales(formatedSales);
      } catch (error) {
        alert("Error al obtener las ventas");
      }
    };

    initialize();
  }, [change]);
  const handleChange = () => {
    setChange((prevChange) => !prevChange);
    BTN_ACT();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:4000/sales", {
        method: "POST",
        body: JSON.stringify({
          id: nombre,
          totalValue: total,
          quantity: cant,
          unitPrice: number,
          date: date,
          clientDoc: doc,
          clientName: obs,
          salesMan: vendor,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const jsonresponse = await response.json();
      const status = jsonresponse.status;
      if (status === 200) {
        alert("Venta creada correctamente");
        handleChange();
      } else {
        alert("Ha ocurrido un error al intentar añadir una nueva venta");
      }
      console.log(jsonresponse);
    } catch (error) {
      console.log(error);
      alert("Ha ocurrido un error al intentar añadir una nueva venta");
    }
  };
  return (
    <div className="div1">
      <div className="prueba">
        <h1>REGISTRO DE VENTAS</h1> <br />
        <button onClick={BTN_ACT} className="boton" id="agregVenta">
          AGREGAR VENTA
        </button>
        <button onClick={BTN_ACT} className="boton active" id="adminVenta">
          VER VENTAS
        </button>{" "}
        <br /> <br /> <br /> <br /> <br />
      </div>
      <div className="contAgreg" id="contAgregVent">
        <form className="form" onSubmit={handleSubmit}>
          <label className="lbl1" htmlfor="nombre">
            {" "}
            ID PRODUCTO:
          </label>
          <input
            className="inp1"
            type="text"
            id="nombre"
            name="nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <label className="lbl1" htmlFor="date">
            FECHA COMPRA:
          </label>
          <input
            className="fecha"
            type="date"
            id="date"
            name="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />{" "}
          <br /> <br />
          <label className="lbl1" htmlFor="number">
            PRECIO UNITARIO:
          </label>
          <input
            className="inp2"
            type="number"
            id="number"
            name="number"
            max="999999"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <label className="lbl1" htmlFor="obs">
            NOMBRE CLIENTE:
          </label>
          <input
            className="inp5"
            type="text"
            id="obs"
            name="obs"
            required
            value={obs}
            onChange={(e) => setObs(e.target.value)}
          />{" "}
          <br /> <br />
          <label className="lbl3" htmlFor="cant">
            CANTIDAD:
          </label>
          <input
            className="inp4"
            type="number"
            id="cant"
            name="cant"
            max="99"
            required
            value={cant}
            onChange={(e) => setCant(e.target.value)}
          />
          <label className="lbl2" htmlFor="doc">
            DOC. CLIENTE:
          </label>
          <input
            className="inp1"
            type="number"
            id="doc"
            name="doc"
            max="9999999999"
            required
            value={doc}
            onChange={(e) => setDoc(e.target.value)}
          />
          <br /> <br />
          <label className="lbl5" htmlFor="total">
            VAL. TOTAL VENTA:
          </label>
          <input
            className="inp1"
            type="number"
            id="total"
            name="total"
            max="9999999999999"
            required
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
          <label className="lbl4" htmlfor="vendor">
            {" "}
            VENDEDOR:
          </label>
          <input
            className="inp1"
            type="text"
            id="vendor"
            name="vendor"
            required
            value={vendor}
            onChange={(e) => setVendor(e.target.value)}
          />{" "}
          <br /> <br />
          <input className="inp3" type="submit" value="AGREGAR VENTA" />
        </form>
      </div>

      <div className="contVer" id="contVerVent">
        <DataGrid
          rows={sales}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </div>
    </div>
  );
}

const BTN_ACT = () => {
  const BTN_VER = document.getElementById("adminVenta");
  const BTN_AGR = document.getElementById("agregVenta");
  const CONT_AGR = document.getElementById("contAgregVent");
  const CONT_VER = document.getElementById("contVerVent");
  if (BTN_VER.classList.contains("active")) {
    BTN_VER.classList.remove("active");
    CONT_VER.style.display = "none";
    BTN_AGR.classList.add("active");
    CONT_AGR.style.display = "block";
  } else if (BTN_AGR.classList.contains("active")) {
    BTN_AGR.classList.remove("active");
    CONT_AGR.style.display = "none";
    BTN_VER.classList.add("active");
    CONT_VER.style.display = "block";
  }
};

export default Ventas;
