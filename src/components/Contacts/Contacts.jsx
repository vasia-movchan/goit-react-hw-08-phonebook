import { useEffect } from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsList, ContactsName, ContactsNumber } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from 'redux/filter/filter-selector';
import { contactsSelector } from 'redux/contacts/contacts-selectors';
import {
  fetchContacts,
  removeContact,
} from 'redux/contacts/contacts-operations';

const Contacts = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const contactsWithFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsList>
      {contactsWithFilter.map(contact => (
        <ContactsItem key={contact.id}>
          <ContactsName>
            {contact.name}
            <ContactsNumber>{contact.number}</ContactsNumber>
          </ContactsName>

          <Button
            variant="contained"
            onClick={() => dispatch(removeContact(contact.id))}
            startIcon={<DeleteIcon />}
            size="small"
          >
            Delete
          </Button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

export default Contacts;
