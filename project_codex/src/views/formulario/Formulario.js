import { useState } from "react";
import "./formulario.css";

export function Formulario() {
    const [nombre, setNombre] = useState("");
    const [date, setDate] = useState("");
    const [number, setNumber] = useState("");
    const [obs, setObs] = useState("");
    const [cant, setCant] = useState("");
    const [doc, setDoc] = useState("");
    const [total, setTotal] = useState("");
    const [vendor, setVendor] = useState("");
    const handleSubmit = e => {
        e.target.reset();
        alert("EL REGISTRO SE HA COMPLETADO");
    }
    return (
        <div className="div1">
            <h1>REGISTRO DE VENTAS</h1> <br />
            <button className="boton">AGREGAR VENTA</button>
            <button className="boton">VER VENTAS</button> <br /> <br/> <br /> <br/> <br />
            <form onSubmit={handleSubmit}>
                <label className="lbl1" htmlfor="nombre"> ID PRODUCTO:</label>
                <input className="inp1" type="text" id="nombre" name="nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} /> 
                <label className="lbl1" htmlFor="date">FECHA COMPRA:</label>
                <input type="date" id="date" name="date" required value={date} onChange={(e) => setDate(e.target.value)} /> <br /> <br/>
                <label className="lbl1" htmlFor="number">PRECIO UNITARIO:</label>
                <input className="inp2" type="number" id="number" name="number" max="999999" required value={number} onChange={(e) => setNumber(e.target.value)} /> 
                <label className="lbl1" htmlFor="obs">NOMBRE CLIENTE:</label>
                <input className="inp5" type="text" id="obs" name="obs" required value={obs} onChange={(e) => setObs(e.target.value)} /> <br />  <br />
                <label className="lbl3" htmlFor="cant">CANTIDAD:</label>
                <input className="inp4" type="number" id="cant" name="cant" max="99" required value={cant} onChange={(e) => setCant(e.target.value)} />
                <label className="lbl2" htmlFor="doc">DOC. CLIENTE:</label>
                <input className="inp1" type="number" id="doc" name="doc" max="9999999999" required value={doc} onChange={(e) => setDoc(e.target.value)} /><br />  <br />
                <label className="lbl5" htmlFor="total">VAL. TOTAL VENTA:</label>
                <input className="inp1" type="number" id="total" name="total" max="9999999999999" required value={total} onChange={(e) => setTotal(e.target.value)} />
                <label className="lbl4" htmlfor="vendor"> VENDEDOR:</label>
                <input className="inp1" type="text" id="vendor" name="vendor" required value={vendor} onChange={(e) => setVendor(e.target.value)} /> <br /> <br />
                <input className="inp3" type="submit" value="AGREGAR VENTA" />

            </form>
        </div>
    );
}

export default Formulario;

