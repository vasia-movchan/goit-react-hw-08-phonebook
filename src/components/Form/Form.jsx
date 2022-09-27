import { useState } from 'react';
import { FormLabel, FormInput } from './Form.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IconButton from '@mui/material/IconButton';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addPerson, setAddPerson] = useState(false);

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
      name,
      number,
    };

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <>
      {!addPerson && (
        <IconButton
          aria-label="add-contact"
          style={{ margin: '0 auto', display: 'block' }}
          type="button"
          onClick={() => setAddPerson(true)}
        >
          <PersonAddIcon fontSize="large" color="primary" />
        </IconButton>
      )}

      {addPerson && (
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

          <Button type="submit" variant="contained" size="small">
            Add contact
          </Button>
        </form>
      )}
    </>
  );
};

export default Form;
