import { FindLabel, FindInput } from './Find.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/filter/filterSlice';
import { filterSelector } from 'redux/filter/filter-selector';

const Find = () => {
  const filter = useSelector(filterSelector);
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
