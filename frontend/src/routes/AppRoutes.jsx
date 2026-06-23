import {
BrowserRouter,
Routes,
Route,
Navigate
} from "react-router-dom";


import Login from "../pages/Login";
import Register from "../pages/Register";

import CustomerDashboard from "../pages/customer/customerDashboard";

import SupplierDashboard from "../pages/SupplierDashboard";

import AdminDashboard from "../pages/AdminDashboard";


function AppRoutes(){


return(

<BrowserRouter>

<Routes>

<Route
path="/"
element={<Navigate to="/login" replace />}
/>

<Route 
path="/login"
element={<Login/>}
/>


<Route 
path="/register"
element={<Register/>}
/>


<Route
path="/customer"
element={<CustomerDashboard/>}
/>


<Route
path="/supplier"
element={<SupplierDashboard/>}
/>


<Route
path="/admin"
element={<AdminDashboard/>}
/>

<Route
path="*"
element={<Navigate to="/login" replace />}
/>

</Routes>


</BrowserRouter>


)

}


export default AppRoutes;
