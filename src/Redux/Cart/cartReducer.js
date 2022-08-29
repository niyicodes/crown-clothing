import {TOOGLE_CART_HIDDEN, ADD_ITEM} from "./cartTypes";
import { addItemToCart } from "./cartUtilities";


const INITIAL_STATE = {
 hidden: true,
 cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
 switch(action.type){
  case TOOGLE_CART_HIDDEN:
   return{
    ...state,
    hidden: !state.hidden
   };
  case ADD_ITEM:
    return{
      ...state,
      cartItems: addItemToCart(state.cartItems, action.payload)
    }
  default:
   return state;
 }
}

export default cartReducer;