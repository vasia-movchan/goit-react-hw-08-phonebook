import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ handleClickDelete, onLogout, children }) => {
  return (
    <ButtonStyled onClick={handleClickDelete || onLogout}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  handleClickDelete: PropTypes.func,
  children: PropTypes.string.isRequired,
};
