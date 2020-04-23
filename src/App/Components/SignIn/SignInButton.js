import React from 'react'
import { Link } from 'react-router-dom'

const SignInButton = () => {
    return ( 
        <div className='sign-in'>
            <h5><Link className='sign-in-link' to ='/signin'>Sign In</Link></h5>
        </div>
     );
}
 
export default SignInButton;