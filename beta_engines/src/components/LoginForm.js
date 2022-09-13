import React from 'react';

const LoginForm = props => {

    const submit = () => {

    }


    return (
        <div style={{ border: "1px black solid", padding: "15px", margin: "15px" }}>
            
            <form onSubmit={submit}>

                <div className='mb-3'>
                    <label htmlFor='color' className='form-label'>
                        Favorite Color
                    </label>

                    <input className='form-control'
                        type="text"
                        id='color' />

                </div>

            </form>


        </div>
    );
};

export default LoginForm;