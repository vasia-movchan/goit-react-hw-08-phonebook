import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Find from 'components/Find/Find';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Find />
      <Contacts />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  width: 400px;
  margin: 0 auto;
  background-color: #c2e0fa;
  border-radius: 4px;
  box-shadow: 2px 3px 13px 0px rgba(0, 0, 0, 0.73); ;
`;

export default App;
