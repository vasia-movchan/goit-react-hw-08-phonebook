import { FindLabel, FindInput } from './Find.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/store';

const Find = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFindInput = event => {
    dispatch(filterChange(event.currentTarget.value.toLowerCase()));
  };

  return (
    <FindLabel>
      Find contacts by name
      <FindInput
        type="text"
        value={filter}
        onChange={handleFindInput}
      ></FindInput>
    </FindLabel>
  );
};

export default Find;
