import { Button } from 'components/Button/Button';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsList } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from 'redux/store';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
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
