import {TOOGLE_CART_HIDDEN, ADD_ITEM} from "./cartTypes";


const INITIAL_STATE = {
 hidden: true,
 cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
 switch(action.type){
  case TOOGLE_CART_HIDDEN:
   return{
    ...state,
    hidden: false
   };
  case ADD_ITEM:
    return{
      ...state,
      cartItems:[...state.cartItems, action.payload]
    }
  default:
   return state;
 }
}

export default cartReducer;