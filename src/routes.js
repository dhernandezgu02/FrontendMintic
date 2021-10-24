import Login from "./views/login/Login"
import Update from "./views/update_employee/Update.js";
import Menu from "./views/menu/Menu.js";
import Ventas from './views/ventas/Ventas';
import Products from './views/products/Products';

const routes={
    not_logged:[
        {url:'/Login',Component:Login}
    ],
    logged:[
        {url:'/Menu',Component:Menu},
        {url:'/Update',Component:Update},
        {url:'/Ventas',Component:Ventas},
        {url:'/Products',Component:Products}
    ]
}
export default routes