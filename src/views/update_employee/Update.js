import React from "react";
import "./update.css";
// import user_icon from "./icons/user_icon.png";
// import clipboard_icon from "./icons/clipboard_icon.png";

function Update() {
  return (
    <div class="container">
      <h1 className="title">ACTUALIZAR INFORMACIÓN DEL VENDEDOR</h1>
      <h2>Nombre completo</h2>
      <input id="nombre" type="text" class="input" placeholder="Nombre"></input>
      <h2>Fecha de nacimiento</h2>
      <input
        id="fecha_nacimiento"
        type="date"
        class="input"
        placeholder=""
      ></input>
      <h2>Email</h2>
      <input id="email" type="email" class="input" placeholder="Email"></input>
      <h2>Contraseña Actual</h2>
      <input
        id="current_password"
        type="password"
        class="input"
        placeholder="*******"
      ></input>
      <h2>Nueva Contraseña</h2>
      <input
        id="new_password_1"
        type="password"
        class="input"
        placeholder="*******"
      ></input>
      <h2>Repetir Contraseña</h2>
      <input
        id="new_password_2"
        type="password"
        class="input"
        placeholder="*******"
      ></input>
      <button onClick={updateInfo} class="btn">
        Actualizar
      </button>
    </div>
  );

  function updateInfo() {
    var new_name_dummie = document.getElementById("nombre").value;
    console.log(document.getElementById("nombre"));
    if (document.getElementById("nombre")) {
      var new_name_dummie = document.getElementById("nombre").value;
    }

    if (document.getElementById("email")) {
      var new_email_dummie = document.getElementById("email").value;
    }

    if (document.getElementById("fecha_nacimiento")) {
      var new_fecha_dummie = document.getElementById("fecha_nacimiento").value;
    }

    if (document.getElementById("new_password_2")) {
      var new_password_dummie = document.getElementById("new_password_2");
    }

    /* if (document.getElementById('current_password') !== password_dummie) {
            window.prompt("La constraseña es incorrecta")
        }else{
            if (document.getElementById('new_password_1') !== document.getElementById('new_password_2')) {
                window.prompt("Las contraseñas no coinciden")
            }else{
                if(document.getElementById('new_password_2').length < 6){
                    window.prompt("La contraseña debe tener más de 6 caracteres")
                }else if (document.getElementById('new_password_2')){
                    var new_password_dummie = document.getElementById('new_password_2');
                    window.prompt("Información actualizada correctamente")
                }
            }
        } 

        console.log(new_password_dummie); */
    console.log(new_name_dummie);
    console.log(new_email_dummie);
    console.log(new_fecha_dummie);
  }
}

export default Update;
