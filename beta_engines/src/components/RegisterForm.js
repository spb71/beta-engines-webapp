<<<<<<< Updated upstream
import React, {useState} from 'react';
import UserApi from '../apis/UserApi';
=======
import React, { useState } from 'react';
import AddUserApi from '../apis/AddUserApi';
>>>>>>> Stashed changes
import { Link } from 'react-router-dom';

const RegisterForm = props => {

    

        const [fname, setFname] = useState('')
        const [lname, setLname] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
     

<<<<<<< Updated upstream
        const handleSubmit = (event) => {
            const user = {
                "fname": fname,
                "lname": lname,
                "email": email,
                "password": password
                
            }
=======
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
>>>>>>> Stashed changes

            UserApi.addUsers(user)

<<<<<<< Updated upstream
            setFname('')
            setLname('')
            setEmail('')
            setPassword('')
            
=======
    const handleSubmit = (event) => {
        const user = {
            "fname": fname,
            "lname": lname,
            "email": email,
            "username": username,
            "password": password

        }

        AddUserApi.addUsers(user)

        setFname('')
        setLname('')
        setEmail('')
        setUsername('')
        setPassword('')
>>>>>>> Stashed changes


        }

    

    return (

        <div style={{ border: "1px black solid", padding: "15px", margin: "15px" }}>



            <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        onChange={ (event) => { setFname(event.target.value) } }
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" onChange={ (event) => { setLname(event.target.value) } }/>
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
<<<<<<< Updated upstream
                        placeholder="Enter email"
                        onChange={ (event) => { setEmail(event.target.value) } }
=======
                        placeholder="Enter email address"
                        onChange={(event) => { setEmail(event.target.value) }}
>>>>>>> Stashed changes
                    />
                </div>
                <div className="mb-3">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        onChange={(event) => { setUsername(event.target.value) }}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={ (event) => { setPassword(event.target.value) } }
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" value='Create' className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered? <Link className="nav-link" to="/log" style={{ "textDecoration": "underline", "color": "blue" }}>Sign in</Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterForm;