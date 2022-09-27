import { StyledPhonebook } from './Phonebook.styled';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Find from 'components/Find/Find';

const Phonebook = () => {
  return (
    <StyledPhonebook>
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '8px',
        }}
      >
        Phonebook
      </h1>

      <Form />
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '8px',
          marginTop: '8px',
        }}
      >
        Contacts
      </h2>
      <Find />
      <Contacts />
    </StyledPhonebook>
  );
};

export default Phonebook;
