import React from 'react'
import { createUserWithEmailAndPassword} from "firebase/auth";
import { collection, addDoc,} from "firebase/firestore";
import { auth, db } from '../../Firebase/Firebase'
import Button from '../Button/Button'
import FormInput from '../FormInput/FormInput'
import "./SignUp.scss"

class SignUp extends React.Component {
 constructor() {
  super()

  this.state = {
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
  }
 }

 handleSubmit = async event => {
  event.preventDefault()

  const { email, password, confirmPassword, displayName } = this.state

  if(password !== confirmPassword){
   alert("passwords do not match");
   return;
  }

   try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: displayName,
      authProvider: "local",
      email,
    });
  }catch (err) {
    console.error(err);
    alert(err.message);
 }
}
 handleChange = event => {
  const {value, name} = event.target
  this.setState({ [name]: value})
 }

 render(){
  const {displayName, email, password, confirmPassword} = this.state
  return (
    <div className="sign-up">
     <h2 className="title">I do not have an account</h2>
     <span>Sign up with your email and password</span>
     <form  className="sign-up-form" onSubmit={this.handleSubmit}>
      <FormInput 
       name="displayName" 
       type="text" 
       value={displayName} 
       onChange={this.handleChange}
       label='Display Name' 
       required
      />
      <FormInput 
       name="email" 
       type="email" 
       value={email} 
       onChange={this.handleChange}
       label='Email' 
       required
      />
      <FormInput 
       name="password" 
       type="password"  
       value={password} 
       onChange={this.handleChange}
       label='Password'  
       required
      />
      <FormInput 
       name="confirmPassword" 
       type="password" 
       value={confirmPassword} 
       onChange={this.handleChange}
       label='Confirm Password'  
       required
      />
      <Button type="submit">Sign Up</Button>
     </form>
    </div>
  )
 }
}

export default SignUp