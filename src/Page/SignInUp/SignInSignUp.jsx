import React from 'react'
import "./SignInUp.scss"
import SignUp from '../../Components/SignUp/SignUp';
import SignIn from '../../Components/SingIn/SignIn';

function SignInSingUP() {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSingUP;