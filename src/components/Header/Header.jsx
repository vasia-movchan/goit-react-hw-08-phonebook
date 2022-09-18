import { StyledHeader } from './Header.styled';
import UserMenu from './Menu/Menu';
import Menu from './UserMenu/UserMenu';

const Header = () => {
  return (
    <StyledHeader>
      <UserMenu />
      <Menu />
    </StyledHeader>
  );
};

export default Header;
