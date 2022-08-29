import React from 'react';
import {createStructuredSelector} from 'reselect'

import Button from '../Button/Button';
import './CartDropdown.scss';
import CartItem from '../CartItem/cartItem'
import { connect } from 'react-redux';
import { selectCartItems } from '../../Redux/Cart/cartSelectors'

const CartDropdown = ({cartItems}) => {
  return (
   <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
      }
    </div> 
    <Button>GO TO CHECKOUT</Button>
   </div>
  )
}

// const mapStateToProps = (state) => ({
//   cartItems:selectCartItems(state)
// })

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)