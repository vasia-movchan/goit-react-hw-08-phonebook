import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signup = async data => {
  const { data: userSignup } = await instance.post('/users/signup', data);
  instance.defaults.headers.common.authorization = `Bearer ${userSignup.token}`;
  return userSignup;
};

export const login = async data => {
  const { data: userLogin } = await instance.post('/users/login', data);
  instance.defaults.headers.common.authorization = `Bearer ${userLogin.token}`;
  return userLogin;
};

export const logout = async () => {
  const { data } = await instance.post('/users/logout');
  instance.defaults.headers.common.authorization = '';
  return data;
};

export const current = async token => {
  try {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    instance.defaults.headers.common.authorization = '';
    throw error;
  }
};

export default instance;
