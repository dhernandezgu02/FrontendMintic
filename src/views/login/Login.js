import React, { useState } from "react";
import Title from "./components/title/Title";
import Label from "./components/label/Label";
import Input from "./components/input/Input";
import "./Login.css";
import { userActions } from "../../store/user-slice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [user, setUser] = useState("prueba1@hotmail.com");
  const [password, setPassword] = useState("123456789");
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  function handleChange(name, value) {
    if (name === "usuario") {
      setUser(value);
    } else {
      setPassword(value);
      if (value.length < 6) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }
  }

  const handleSubmit = async () => {
    // let account = { user, password };
    // if (account) {
    //   console.log("account", account);
    // }
    try {
      const response = await fetch("http://127.0.0.1:4000/users/signin", {
        method: "POST",
        body: JSON.stringify({
          email: user,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const jsonresponse = await response.json();
      const status = jsonresponse.status;
      if (status === 200) {
        dispatch(userActions.setValue({ key: "isLogged", value: true }));
      } else {
        alert(jsonresponse.message);
      }
      console.log(jsonresponse);
    } catch (error) {
      console.log(error);
      alert("Ha ocurrido un error al intentar logearse");
    }
  };

  // console.log("usuario", user);
  // console.log("password", password);
  return (
    <div className="Login-Container">
      <Title className="clase" text="¡Bienvenido!" />
      <Label className="text-user" text="Usuario" />
      <Input
        attribute={{
          id: "usuario",
          name: "usuario",
          type: "text",
          placeholder: "Ingrese su usuario",
        }}
        handleChange={handleChange}
        value={user}
      />
      <Label text="Contraseña" />
      <Input
        attribute={{
          id: "contraseña",
          name: "contraseña",
          type: "password",
          placeholder: "Ingrese su contraseña",
        }}
        handleChange={handleChange}
        param={passwordError}
        value={password}
      />
      {passwordError && (
        <label className="label-error-message">
          Contraseña invalida o incompleta.
        </label>
      )}
      <div className="button-submit-container">
        <button
          className="button-submit"
          onClick={handleSubmit}
          style={{ fontSize: 24 }}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default Login;
