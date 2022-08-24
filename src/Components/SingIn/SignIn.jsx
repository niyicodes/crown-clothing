import React, { Component } from 'react'
import Button from '../Button/Button'
import FormInput from '../FormInput/FormInput'
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth} from '../../Firebase/Firebase'
import {signInWithGoogle} from '../../Firebase/Firebase'
import './SignIn.scss'


export class SignIn extends Component {
 constructor() {
  super()

  this.state = {
   email: '',
   password: ''
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this
 }

 handleSubmit = async event => {
  const {email, password} = this.state
  try {
    await signInWithEmailAndPassword(auth,email, password);
    this.setState({email:"", password:""})
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
  event.preventDefault();
 }

 handleChange = event => {
  const {value, name} = event.target
  this.setState({ [name]: value})
 }
  render() {
    return (
      <div className="sign-in">
       <h2>I already have an account</h2>
       <span>Sign in with your email and password</span>

       <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email"
            value={this.state.email} 
            required 
            label="Email"
            handleChange={this.handleChange}
          />

          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            handleChange={this.handleChange} 
            label="Password"
            required 
          />

          <div className="button">
            <Button type="submit"  onClick={signInWithEmailAndPassword}>Sign In</Button>
            <Button  onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</Button>
          </div>
       </form>
      </div>
    )
  }
}

export default SignIn;