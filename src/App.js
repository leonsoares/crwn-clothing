import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/ShopPage.component'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'
import { auth } from './firebase/firebase.utils'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx'

// const HatsPage = () => (
//   <div>
//     <h1>Hats Page rrrrr</h1>
//   </div>
// )

const ShirtsPage = () => (
  <div>
    <h1>get shirts here</h1>
  </div>
)
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser: user})
    console.log(user)
  })
}
componentWillUnmount(){
  this.unsubscribeFromAuth()
}

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/shirts' component={ShirtsPage} />
            <Route path='/signin' component={SignInAndSignUpPage}/>
          </Switch>
      </div>
    );
  }
}

export default App;
