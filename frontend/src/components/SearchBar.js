import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './search.css'; // Import your custom CSS file

const SearchBar = ({ history }) => {
  const [queries, setQuery] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    if (queries.trim()) {
      history.push(`/search/${queries}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text" // Change type to "text"
        name="q"
        onChange={e => setQuery(e.target.value)}
        placeholder="Find what you came for..."
        className="search-dropdown mr-sm-30 ml-sm-5" // Updated class name
      />
      {/* Uncomment if you need the button
      <Button type="submit" variant="outline-light" className="p-2">
        Search
      </Button>
      */}
    </Form>
  );
};

export default SearchBar;

