
import React from 'react';

const RegisterForm = props => {
    return (

        <div style={{ border: "1px black solid", padding: "15px", margin: "15px" }}>

        

<<<<<<< Updated upstream
            <h1>Register</h1>
            <form>
                <fieldset>
                    <legend>Enter Information to Register</legend>




                    <label classname='form-label'>First Name:</label>
                    <input className='form-control' type="text" placeholder="Enter First Name" />
                    <br />
                    

                    <label classname='form-label'>Last Name:</label>
                    <input className='form-control' type="text" placeholder="Enter Last Name" />
                    <br />
                  

                    <label classname='form-label'>Date of Birth:</label>
                    <input className='form-control' type="date" placeholder="Enter Date of Birth" />
                    <br />
                  

                    <label classname='form-check-label'>Gender:</label>
                    <input classname='form-check-input' type="radio" id="male" name="gender" value="Male" />
                    <label classname='form-check-label' for='male'>Male</label>
                    <input classname='form-check-input'type="radio" id="female" name="gender" value="Female" />
                    <label classname='form-check-label' for='female'>Female</label>
                    <input classname='form-check-input' type="radio" id="other" name="gender" value="Other" />
                    <label classname='form-check-label' for='other'>Other</label>
                    <br />
                  

                    <label classname='form-label'>Email:</label>
                    <input className='form-control' type="text" placeholder="Enter Email" />
                    <br />
                  

                    <label classname='form-label'>Password:</label>
                    <input className='form-control' type="password" placeholder="Enter Password" />
                    <br />
                    

                    <input className='btn btn-primary' type="submit" value="Register" />

                    <label>First Name:</label>
                    <input type="text" placeholder="Enter First Name" />
                    <br />

                    <label>Last Name:</label>
                    <input type="text" placeholder="Enter Last Name" />
                    <br />

                    <label>Date of Birth:</label>
                    <input type="date" placeholder="Enter Date of Birth" />
                    <br />

                    <label>Sex:</label>
                    <input type="radio" id="male" name="sex" value="Male" />
                    <label for='male'>Male</label>
                    <input type="radio" id="female" name="sex" value="Female" />
                    <label for='female'>Female</label>
                    <br />

                    <label>Email:</label>
                    <input type="text" placeholder="Enter Email" />
                    <br />

                    <label>Password:</label>
                    <input type="password" placeholder="Enter Password" />
                    <br />

                    <input type="submit" value="Register" />

                </fieldset>
=======
            
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
>>>>>>> Stashed changes
            </form>
        </div>
    );
};

export default RegisterForm;


