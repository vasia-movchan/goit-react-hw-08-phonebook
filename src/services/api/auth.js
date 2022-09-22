import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signup = async data => {
  const { data: userSignup } = await instance.post('/users/signup', data);
  return userSignup;
};

export const login = async data => {
  const { data: userLogin } = await instance.post('/users/login', data);
  instance.defaults.headers.common.authorization = userLogin.token;
  return userLogin;
};

export default instance;

// export const removeContact = async id => {
//   const { data: contactRemove } = await instance.delete(`/${id}`);
//   return contactRemove;
// };

// export const signup = async data => {
//   const { data } = await instance.get('/');

//   return data;
// };
