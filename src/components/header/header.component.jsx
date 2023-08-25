import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import UserContext from '../../contexts/user/user-context';

import CardIcon from '../card-icon/card-icon-component';
import CartDropdown from '../card-dropdown/card-dropdown-component';

const Header = () => {
  // const user = useSelector(state => state.user.value.user);
  const user = useContext(UserContext);
  const isopen = useSelector((state) => state.card.value.isOpen);
  return (
    <div className="header">
      <Link className="logo-container" to="/crwn-clothing">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/crwn-clothing/shop">
          SHOP
        </Link>
        <Link className="option" to="/crwn-clothing/shop">
          CONTACT
        </Link>
        {user ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SING OUT
          </div>
        ) : (
          <Link to="/crwn-clothing/sign-in">SING IN</Link>
        )}
        <CardIcon />
      </div>
      {isopen ? <CartDropdown /> : null}
    </div>
  );
};
export default Header;
