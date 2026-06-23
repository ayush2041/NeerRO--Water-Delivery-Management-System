import {useState} from "react";
import api from "../api/axios";
import {useNavigate} from "react-router-dom";


function Login(){


const navigate=useNavigate();


const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



const login=async()=>{


const res =
await api.post(
"/users/login",
{
email,
password
}
);



localStorage.setItem(
"token",
res.data.token
);



const role=res.data.user.role;



if(role==="customer")
navigate("/customer");


if(role==="supplier")
navigate("/supplier");


if(role==="admin")
navigate("/admin");



}



return(

<div>


<h1>
Login
</h1>


<input
placeholder="email"
onChange={
e=>setEmail(e.target.value)
}
/>


<input

placeholder="password"

onChange={
e=>setPassword(e.target.value)
}

/>


<button onClick={login}>
Login
</button>


</div>

)


}


export default Login;