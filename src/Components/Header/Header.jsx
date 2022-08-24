import React from 'react'
import {auth} from '../../Firebase/Firebase'
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import "./Header.scss"
import { connect } from 'react-redux';
import Cart from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';


function Header({currentUser, hidden}) {
  return (
    <div className="header">
     <Link to="/" className='logo-container'>
      <Logo className="logo" />
     </Link>
     <div className="options">
      <Link className='option' to='/shop'>
       SHOP
      </Link>
      <Link className='option' to='/contact'>
       CONTACT
      </Link>
      {
        currentUser ? 
        (<div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>) 
        : (<Link className='option' to='/signin'>SIGN IN</Link>
        )
      }
      <Cart />
     </div>
     {hidden ? null : <CartDropdown /> }
    </div>
  )
}
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);