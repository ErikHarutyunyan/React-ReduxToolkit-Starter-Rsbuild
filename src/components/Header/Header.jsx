import { NavLink } from 'react-router-dom';

import { ABOUT, BLOG, HOME, LOGIN } from '@router/Main/paths';
import { HeaderWrapper } from './Header.styled';

const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        <NavLink to={HOME}>Home</NavLink>
        <NavLink to={ABOUT}>About</NavLink>
        <NavLink to={BLOG}>Blog</NavLink>
        <NavLink to={LOGIN}>Login</NavLink>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
