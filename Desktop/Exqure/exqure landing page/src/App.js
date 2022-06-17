import React from 'react'
import './App.css';
import logo from './images/logo.png'
import Instagram from './images/instagram.png'
import Twitter from './images/twitter.png'
import Linkdeln from './images/linkdln.png'
import Facebook from './images/facebook.png'

function App() { 
  const [email, setEmail] = React.useState("");

 

  function clickHandler(event){
    console.log(event.target)
  }

  return (
    <div className="ComingSoon">
      <section className='content'>
        <img src={logo} alt="My Logo" className='ComingSoonImage'/>
        <div className="text">
          <h1 className='ComingSoonText'>Coming Soon</h1>
          <p className='ComingSoonParag'>
            with exqure you can buy and sell anything safely and securely
          </p>
        </div>
      </section>
      <form className='newsletter' onSubmit={clickHandler}>
        <input 
          type="email" 
          name='email'
          placeholder='Enter your email' 
          className='ComingSoonInput'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type='submit' className='ComingSoonEmail' id='newsletter' >Notify Me!</button>
      </form>
      <section className="socials">
        <a href="https://www.instagram.com/p/CeqySNvtEuJ/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" /></a>
        <a href="https://twitter.com/ExqureE?t=yp4nu4CAvcFlgU21yjzAPQ&s=08" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Twitter" /></a>
        <a href="https://www.linkedin.com/in/exqure-escrow-357a76241" target="_blank" rel="noopener noreferrer"><img src={Linkdeln} alt="Linkedl" /></a>
        <a href="https://www.instagram.com/p/CeqySNvtEuJ/" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" /></a>
      </section>
    </div>
  );
}

export default App;