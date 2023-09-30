import { useState } from 'react';

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
    console.log(e.currentTarget.search.value);
    setValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" name="search" value={value} onChange={changeValue} />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearch;
