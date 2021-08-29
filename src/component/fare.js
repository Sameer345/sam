import React , { useState } from 'react';
import services from '../service/serviceapi';
import Signup from "./Sgnup";
import { useHistory } from 'react-router-dom';
const Sinup = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        password: "",
        email: ""
    });
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
    // // console.log(records)
    console.log("ok",newRecord)
    document.getElementById('msg').innerHTML = 'gfgfdg'

//    not working this commmand  // let res = await Signup.sendData(JSON.stringify(newRecord))
    // let res = await Signup.sendData(newRecord)
    // console.log("sam",res)
    // if (res.data.status== "FAIL"){
    //     let a = res.data.message;
    //     console.log("sam",a)

        // alert(res.data.message)
        // document.getElementById("emailError").innerHTML=res.data.message;
    // } //else document.getElementById("emailError").innerHTML="";

    // console.log('nas',res)
    // setUser({name:"",password:"",email:""})
 
  

    }

    return (
    <div>
        <form action="">
            <div>
                <label htmlFor="name">userName</label>
                <input type="text" autoComplete="off" required value={user.name} onChange={handleInput} name="name" id="name"></input>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" autoComplete="off"  required value={user.email} onChange={handleInput} name="email" id="email"></input>
                <span id="msg"></span>
                {/* <span id="emailError"></span> */}
            </div>
            <div>
                <label htmlFor="passsword">password</label>
                <input type="password" autoComplete="off" required value={user.password} onChange={handleInput} name="password" id="passsword"></input>
            </div>
            
            <button onClick={handleOutput}>button</button>
        </form>
    </div>
    );
};
export default Sinup;