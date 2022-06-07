import React, { useState } from "react";
import "./register.css"
import axios from "axios";
//import res from "express/lib/response";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        ConfirmPassword: ""

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, ConfirmPassword } = user
        if (name && email && password && (password === ConfirmPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => console.log(res))

        }
        else {
            alert("invalid input ")
        }
    }


    return (
        <div className="register">
            {console.log("user", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
            <input type="password" name="ConfirmPassword" value={user.ConfirmPassword} placeholder="Confirm your password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div className="button">Login</div>
        </div>
    )
}
export default Register