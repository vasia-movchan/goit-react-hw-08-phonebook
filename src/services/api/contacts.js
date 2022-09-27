import instance from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: contactAdd } = await instance.post('/contacts', data);
  return contactAdd;
};

export const removeContact = async id => {
  const { data: contactRemove } = await instance.delete(`/contacts/${id}`);
  return contactRemove;
};
