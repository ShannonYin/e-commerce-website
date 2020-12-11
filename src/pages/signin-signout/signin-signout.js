import React from 'react';
import './signin-signout.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
const SignInAndSignOut = () => (
    <div className='sign-in-and-sign-out'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignOut;