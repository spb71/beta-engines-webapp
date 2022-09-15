import React from 'react';

const LoginForm = props => {

    const submit = (event) => {

        event.preventDefault();

    }


    return (
        <div style={{ border: "1px white solid", padding: "15px", margin: "15px" }}>

            <form onSubmit={submit}>
                <h3>Sign In</h3>
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
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </div>
            </form>


        </div>
    );
};

export default LoginForm;