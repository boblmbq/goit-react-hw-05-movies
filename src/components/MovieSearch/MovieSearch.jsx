import { useState } from 'react';
import { ButtonStyled, FormStyled, InputStyled } from './MovieSearch.styled';

const MovieSearch = ({ submitHandle }) => {
  const [value, setValue] = useState('');

  function changeValue(e) {
    const newValue = e.target.value;

    if (newValue.toLowerCase() === value.toLowerCase()) return;

    setValue(newValue);
  }

  function onSubmit(e) {
    e.preventDefault();
    const submittedValue = e.currentTarget.search.value;
    if (submittedValue.trim() === '') {
      alert('please write something');
      return;
    }
    submitHandle(submittedValue);
    setValue('');
  }

  return (
    <FormStyled onSubmit={onSubmit}>
      <InputStyled
        placeholder="write your query"
        autoComplete="off"
        type="text"
        name="search"
        value={value}
        onChange={changeValue}
      />

      <ButtonStyled type="submit">press enter or here to search</ButtonStyled>
    </FormStyled>
  );
};

export default MovieSearch;
