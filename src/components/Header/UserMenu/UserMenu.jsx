import { StyledLink, MenuList, StyledSpan } from './UserMenu.styled';
import { useSelector } from 'react-redux';
import { user, isAuth } from 'redux/auth/auth-selectors';
import { Button } from 'components/Button/Button';

const UserMenu = () => {
  const { email } = useSelector(user);
  const userLogin = useSelector(isAuth);

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
          <Button>Logout</Button>
        ) : (
          <StyledLink to="/login">Login</StyledLink>
        )}
      </li>
    </MenuList>
  );
};

export default UserMenu;
