import React , { useState,useEffect} from 'react';
import formVaidation from './validation' 
// import services from '../service/serviceapi';
import Signup from "./Sgnup";
import Validation from './validation';
// import { useHistory } from 'react-router-dom';
const Sinup = () => {
    // let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        password: "",
        email: ""
    });
    const [error, setError] = useState({})
    // const [records, setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const handleOutput = async (e) => {
    e.preventDefault();
    setError(Validation(user))

    // const newRecord = { ...user}
    // //     // ,id:new Date().getTime().toString()
    
    
    }
    useEffect(() => {
        if(Validation(user)){  
    const newRecord = { ...user}
    console.log(newRecord)
        }
        else 
         alert("asds")
    }, [error])

    return (
    <div>
        <form action="">
            <div>
                <label htmlFor="name">userName</label>
                <input type="text" autoComplete="off" required value={user.name} onChange={handleInput} name="name" id="name"></input>
                {error.name && <p>{error.name}</p>}

            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" autoComplete="off"  required value={user.email} onChange={handleInput} name="email" id="email"></input>
                {error.email && <p>{error.email}</p>}
              
            </div>
            <div>
                <label htmlFor="passsword">password</label>
                <input type="password" autoComplete="off" required value={user.password} onChange={handleInput} name="password" id="passsword"></input>
                {error.password && <p>{error.password}</p>}

            </div>
            
            <button onClick={handleOutput}>button</button>
        </form>
    </div>
    );
};
export default Sinup;