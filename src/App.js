import React from 'react'
import { Routes,Route} from 'react-router-dom';

import {createStructuredSelector} from 'reselect'
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Page/homepage/Homepage';
import ShopPage from './Page/ShopPage/Shop';
import SignInSingUP from './Page/SignInUp/SignInSignUp';
import {auth} from './Firebase/Firebase'
import { connect } from 'react-redux';
import {setCurrentUser} from './Redux/User/userActions';
import { selectCurrentUser } from './Redux/User/userSelector';



class App extends React.Component{ 
 unsubscirbeFromAuth = null;
 

  componentDidMount(){
    this.unsubscirbeFromAuth = auth.onAuthStateChanged((user) => {
      if(user){
        setCurrentUser({
          currentUser: user
        })
      }else{
        setCurrentUser(user)
      }
    })
  }
  // componentDidMount(){
  //   this.unsubscirbeFromAuth = auth.onAuthStateChanged((user) => {
  //     this.setState({
  //       currentUser: user
  //     })
  //   })
  // }

  componentWillUnmount(){
    this.unsubscirbeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          {/* <Route  path='/hats' element={<Homepage />}/> */}
          <Route  path='/shop' element={<ShopPage />}/>
          <Route exact path='/signin' element={<SignInSingUP />}/>
        </Routes>
      </div>
    );
  }
  
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// //mainmapStateToProps })

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
