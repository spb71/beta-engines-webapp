<<<<<<< Updated upstream
=======
import React from 'react';

const RegisterForm = props => {
    return (
        <div className='nb-3'>
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
                </fieldset>
            </form>
        </div>
    );
};
export default RegisterForm;
>>>>>>> Stashed changes
