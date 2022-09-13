import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = props => {

    return (

        <div style={{ border: "1px black solid", padding: "15px", margin: "15px" }}>

        

            <h1>Register</h1>
            <form>
                <fieldset>
                    <legend>Enter Information to Register</legend>




                    <label classname='form-label'>First Name:</label>
                    <input className='form-control' type="text" placeholder="Enter First Name" />
                    <br />
                    


    const submit = (event) => {
        event.preventDefault();
    }

    return (

        <div className='nb-3'>



                </fieldset>

            <h1>Register</h1>

            <form onSubmit={submit}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
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


