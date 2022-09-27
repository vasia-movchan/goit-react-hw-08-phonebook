import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { FormLabel, FormInput, StyledForm } from './LoginForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { isAuth } from 'redux/auth/auth-selectors';
import { Button } from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
    switch (event.currentTarget.name) {
      case 'email':
        setEmail(event.currentTarget.value);
        break;
      case 'password':
        setPassword(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch();
  const isLogin = useSelector(isAuth);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const user = {
      email,
      password,
    };

    dispatch(login(user));
    setEmail('');
    setPassword('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormLabel>
        E-mail
        <FormInput
          type="email"
          name="email"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          value={email}
        ></FormInput>
      </FormLabel>

      <FormLabel>
        Password
        <FormInput
          type="password"
          name="password"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          value={password}
        ></FormInput>
      </FormLabel>

      <Button type="submit" variant="contained" size="small">
        Login
      </Button>
    </StyledForm>
  );
};

export default LoginForm;
