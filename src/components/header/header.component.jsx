import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux'

// createStructuredSelector
import { createStructuredSelector} from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'

import './header.styles.scss';

import CartIcon  from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles'

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser ? 
        <OptionLink as='div' onClick={() => auth.signOut()}> SIGN OUT</OptionLink>
        :
        <OptionLink className='optiom' to='/signin'> SIGN IN</OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>
    {
      hidden ? '' : <CartDropdown/>
    }
    
  </HeaderContainer>
);





/*  before styled-components:
  const Header = ({currentUser, hidden}) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {
          currentUser ? 
          <div className="option" onClick={() => auth.signOut()}> SIGN OUT</div>
          :
          <Link className='optiom' to='/signin'> SIGN IN</Link>
        }
        <CartIcon/>
      </div>
      {
        hidden ? '' : <CartDropdown/>
      }
      
    </div>
  );    
*/


    //createStructuredSelector automatically passes our top level state tha we get from mapStateToProps
    // into each selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

    // without selector
// const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
//   currentUser,
//   hidden
// })


export default connect(mapStateToProps)(Header);