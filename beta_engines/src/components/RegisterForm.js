import React, {useState} from 'react';
import UserApi from '../apis/UserApi';
import { Link } from 'react-router-dom';

const RegisterForm = props => {

    

        const [fname, setFname] = useState('')
        const [lname, setLname] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
     

        const handleSubmit = (event) => {
            const user = {
                "fname": fname,
                "lname": lname,
                "email": email,
                "password": password
                
            }

            UserApi.addUsers(user)

            setFname('')
            setLname('')
            setEmail('')
            setPassword('')
            


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
                        placeholder="Enter email"
                        onChange={ (event) => { setEmail(event.target.value) } }
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