import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
    return(
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
                    currentUser?
                    (<div className='option' onClick={()=>{auth.signOut()}}>
                        SING OUT
                    </div>) :
                    (<Link to='sign-in'>
                        SING IN
                    </Link>)
                }
            </div>
        </div>
    ) 
}
export default Header;