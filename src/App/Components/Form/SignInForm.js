import React from 'react'

const SignInForm = () => {
    return (
        <div className='form-card-sign-in'>
            <div className='sign-in-oauth'>
                <div className='sign-in-oauth-button'>
                    <i className="fab fa-google"></i>
                </div>
                <div className='sign-in-oauth-button'>
                    <i className="fab fa-facebook-f"></i>
                </div>
                <div className='sign-in-oauth-button'>
                    <i className="fab fa-twitter"></i>
                </div>
            </div>
            <form className='card-form-style'>
                <input
                    data-input-email
                    type='text'
                    name='email'
                    placeholder='Username'
                />
                <i data-user className="fas fa-user"></i>
            </form>
            <form className='card-form-style'>
                <input
                    data-input-password
                    type='text'
                    name='password'
                    placeholder='Password'
                />
                <i data-password className="fas fa-key"></i>
            </form>
            <input data-input-submit type='submit' />
        </div>
    );
}

export default SignInForm;