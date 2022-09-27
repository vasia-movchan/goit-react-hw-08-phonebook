import { StyledLink, MenuList, StyledSpan } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import { user, isAuth } from 'redux/auth/auth-selectors';
import { Button } from 'components/Button/Button';
import { logout } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const { email } = useSelector(user);
  const userLogin = useSelector(isAuth);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <MenuList>
      <li>
        {userLogin ? (
          <StyledSpan>{email}</StyledSpan>
        ) : (
          <StyledLink to="/register">Signup</StyledLink>
        )}
      </li>
      <li>
        {userLogin ? (
          <Button type="button" onLogout={onLogout}>
            Logout
          </Button>
        ) : (
          <StyledLink to="/login">Login</StyledLink>
        )}
      </li>
    </MenuList>
  );
};

export default UserMenu;
