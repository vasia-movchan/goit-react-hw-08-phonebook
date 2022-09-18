import { StyledPhonebook } from './Phonebook.styled';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Find from 'components/Find/Find';

const Phonebook = () => {
  return (
    <StyledPhonebook>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Find />
      <Contacts />
    </StyledPhonebook>
  );
};

export default Phonebook;
