import React from 'react';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/'>
                HOME
            </OptionLink>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            {
                currentUser ? (
                    <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>
                    SIGN IN
                    </OptionLink>
                )
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown/> 
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
     currentUser: selectCurrentUser,
     hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);