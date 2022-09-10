import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormLabel, FormInput } from './Form.styled';
import { Button } from 'components/Button/Button';
import { addItem } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addItem(contact));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          value={name}
        ></FormInput>
      </FormLabel>

      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          value={number}
        ></FormInput>
      </FormLabel>

      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default Form;
