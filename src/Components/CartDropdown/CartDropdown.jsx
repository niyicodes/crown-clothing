import React from 'react';
import {createStructuredSelector} from 'reselect'
import {useNavigate} from 'react-router-dom'
import Button from '../Button/Button';
import './CartDropdown.scss';
import CartItem from '../CartItem/cartItem'
import { connect } from 'react-redux';
import { selectCartItems } from '../../Redux/Cart/cartSelectors'
import { toggleCartHidden } from '../../Redux/Cart/cartActions';


const CartDropdown = ({cartItems, dispatch}) => {
  const navigate = useNavigate();
  return (
   <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )
      }
    </div> 
    <Button 
      onClick={() => {navigate('/checkout'); dispatch(toggleCartHidden())}}
    >
      GO TO CHECKOUT
    </Button>
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