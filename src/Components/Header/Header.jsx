import React from 'react'
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {auth} from '../../Firebase/Firebase'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import "./Header.scss"
import Cart from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../Redux/Cart/cartSelectors';
import { selectCurrentUser } from '../../Redux/User/userSelector';


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
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);