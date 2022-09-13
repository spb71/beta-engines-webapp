import React from 'react';

const RegisterForm = props => {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <fieldset>
                    <legend>Enter Information to Register</legend>



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
            </form>
        </div>
    );
};
export default RegisterForm;