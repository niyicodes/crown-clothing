import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg'
import './CartIcon.scss'
import {toggleCartHidden} from '../../Redux/Cart/cartActions'
import { connect } from 'react-redux'

const Cart = ({toggleCartHidden}) => {
 return (
  <div className='cart-icon' onClick={toggleCartHidden}>
   <ShoppingIcon className='shopping-icon' />
   <span className='item-count'>0</span>
  </div>
 )
}

const mapDispatchToProps = dispatch => ({
 toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(Cart);