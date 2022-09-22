import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: black;
  text-decoration: none;
  margin-right: 16px;

  &.active {
    color: gray;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  padding: 16px;
  margin: 0;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; */
`;

export const StyledSpan = styled.span`
  font-size: 20px;
  margin-right: 8px;
`;
