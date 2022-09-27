import { StyledLink, MenuList, StyledSpan } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import { user, isAuth } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import { Button } from '@mui/material';

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
          <Button
            type="submit"
            variant="contained"
            size="small"
            onClick={onLogout}
          >
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
