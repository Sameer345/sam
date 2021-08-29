import React from 'react';
import { useState} from 'react';
import services from '../service/serviceapi';
import login from "./Sgnup";

const Login = () =>{
    const [user, setUser] = useState({
        password: "",
        email: ""
    });
    const [error, setError] = useState({})
    const [records, setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const handleOutput = async (e) => {
    e.preventDefault();
    const newRecord = { ...user
        // ,id:new Date().getTime().toString()
    }
    setRecords([...records, newRecord]);
    let res = await login.logData(newRecord)
    console.log("sam",res)
    setError({
        email:res.data.message,
            })
    }

    return(
        <div>
        <form action="">
           
            <div>
                <label htmlFor="email">email</label>
                <input type="text" autoComplete="off"  required value={user.email} onChange={handleInput} name="email" id="email"></input>
                {error.email && <p>{error.email}</p>}
              
            </div>
            <div>
                <label htmlFor="passsword">password</label>
                <input type="password" autoComplete="off" required value={user.password} onChange={handleInput} name="password" id="passsword"></input>
                {/* {error.password && <p>{error.password}</p>} */}

            </div>
            
            <button onClick={handleOutput}>button</button>
        </form>
    </div>
    );
};
export default Login;