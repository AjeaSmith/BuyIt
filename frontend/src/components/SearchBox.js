import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
const SearchBox = ({ history }) => {
  const [keyword, setkeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        placeholder="search products..."
        onChange={(e) => setkeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      />
      <Button type="submit">
        <i className="fas fa-search"></i>
      </Button>
    </Form>
  );
};

export default SearchBox;