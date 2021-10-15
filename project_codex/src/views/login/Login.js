import React, {useState} from "react";
import Title from "./components/title/Title";
import Label from "./components/label/Label";
import Input from "./components/input/Input";
import './Login.css';

const Login = () =>{

    const [user, setUser ] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError]= useState(false);

    function handleChange(name,value){
        if(name === 'usuario'){
            setUser(value)
        }
        else{
            if(value.length < 6){
                setPasswordError(true)
            }
            else{
                setPassword(value)
                setPasswordError(false)
            }
            
        }
    };

    function handleSubmit(){
        let account ={user,password}
        if (account){
            console.log('account', account)
        }
    }

    console.log('usuario', user)
    console.log('password',password)
    return (
        <div className='Login-Container'>
            <Title text='¡Bienvenido!' />
            <Label className='text-user' text='Usuario'/>
            <Input
            attribute={
                {
                    id:'usuario',
                    name:'usuario',
                    type:'text',
                    placeholder:'Ingrese su usuario'
                }
            }
            handleChange={handleChange}
            />
            <Label text='Contraseña'/>
            <Input 
            attribute={
                {
                    id:'contraseña',
                    name:'contraseña',
                    type:'password',
                    placeholder:'Ingrese su contraseña'
                }
                
            }
            handleChange={handleChange}
            param={passwordError}
            />
            {passwordError && 
                <label className='label-error-message'>
                    Contraseña invalida o incompleta.
                </label>}
            <div className='button-submit-container'>
                <button className='button-submit' onClick={handleSubmit} style={{fontSize : 24}}>
                    Ingresar
                </button>
            </div>
            
        </div>
    )
};

export default Login;