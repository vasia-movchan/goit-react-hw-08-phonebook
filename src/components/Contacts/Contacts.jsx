import { Button } from 'components/Button/Button';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsList } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from 'redux/contactsSlice';
import { filterSelector, contactsSelector } from 'redux/selectors';

const Contacts = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const contactsWithFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const dispatch = useDispatch();

  return (
    <ContactsList>
      {contactsWithFilter.map(contact => (
        <ContactsItem key={contact.id}>
          {contact.name}: {contact.number}
          <Button handleClickDelete={() => dispatch(removeItem(contact.id))}>
            Delete
          </Button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

export default Contacts;
