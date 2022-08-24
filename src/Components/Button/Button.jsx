import React from 'react'
import './Button.scss';
function Button({children,inverted, isGoogleSignIn, ...otherProps}) {
  return (
   <button 
   className={`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherProps}>{children}</button>
  )
}

export default Button;