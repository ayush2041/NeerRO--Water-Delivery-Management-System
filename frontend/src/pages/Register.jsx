import {useState} from "react";
import api from "../api/axios";


function Register(){


return(

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-200">


<div className="bg-white p-8 rounded-2xl shadow-xl w-96">


<h1 className="text-3xl font-bold text-center text-blue-600 mb-6">

🚰 NeerRO

</h1>



<input

className="w-full p-3 border rounded-lg mb-4"

placeholder="First Name"

/>



<input

className="w-full p-3 border rounded-lg mb-4"

placeholder="Email"

/>



<input

className="w-full p-3 border rounded-lg mb-4"

placeholder="Phone"

/>



<input

className="w-full p-3 border rounded-lg mb-4"

placeholder="Password"

/>



<button

className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"

>

Create Account

</button>



</div>


</div>


)

}


export default Register;