import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/ShopPage.component'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx'

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

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }
        else{
          this.setState({ currentUser: userAuth });
        }
    });
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
