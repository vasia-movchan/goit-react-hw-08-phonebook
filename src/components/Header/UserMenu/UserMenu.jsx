import { StyledLink, MenuList } from './UserMenu.styled';

const UserMenu = () => {
  return (
    <MenuList>
      <li>
        <StyledLink to="/register">Signup</StyledLink>
      </li>
      <li>
        <StyledLink to="/login">Login</StyledLink>
      </li>
    </MenuList>
  );
};

export default UserMenu;
