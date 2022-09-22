import { StyledNavLink, MenuList } from './Menu.styled';
import { isAuth } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Menu = () => {
  const userLogin = useSelector(isAuth);
  return (
    <MenuList>
      <li>
        <StyledNavLink to="/">Home</StyledNavLink>
      </li>
      {userLogin && (
        <li>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </li>
      )}
    </MenuList>
  );
};

export default Menu;
