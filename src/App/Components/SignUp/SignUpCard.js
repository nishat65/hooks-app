import React from 'react'
import SignUpForm from '../Form/SignUpForm'
import { Link } from 'react-router-dom'

const SignInCard = () => {
    return (
        <div className='sign-up-card'>
            <h3>Sign Up</h3>
            <div className='border-bottom width-50 margin-auto'></div>
            <SignUpForm/>
        </div>
      );
}
 
export default SignInCard;