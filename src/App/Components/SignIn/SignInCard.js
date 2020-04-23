import React from 'react'
import SignInForm from '../Form/SignInForm'

const SignInCard = () => {
    return (
        <div className='sign-in-card'>
            <h3>Sign In</h3>
            <div className='border-bottom width-50 margin-auto'></div>
            <SignInForm/>
        </div>
      );
}
 
export default SignInCard;