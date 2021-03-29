import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/ShopPage.component'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'

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

function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/shirts' component={ShirtsPage} />
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
    </div>
  );
}

export default App;
