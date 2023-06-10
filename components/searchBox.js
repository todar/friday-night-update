import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import ClearIcon from "@material-ui/icons/Clear";

import { useState, useRef  } from 'react'
import { useSearch, types } from "../context/searchContext";
import { withTheme } from "@material-ui/core";

const searchBox = () => {
  const [{ value }, dispatch] = useSearch();
  const [inputValue, setInputValue] = useState(value);
  const debounceTimeout = useRef();

  const handleFilterChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      dispatch({ type: types.SET_VALUE, payload: newValue });
    }, 300);
  }

  function clear() {
    dispatch({ type: types.SET_VALUE, payload: "" });
    setInputValue('');
  }
  return (
    <Container maxWidth="md" style={style}>
      <form>
        <TextField
          color="secondary"
          variant="outlined"
          fullWidth={true}
          placeholder="Search for songs"
          value={inputValue}
          onChange={handleFilterChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Clear Search Field"
                  onClick={clear}
                  onMouseDown={clear}
                  edge="end"
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </form>
    </Container>
  );
};

const style = {
  position: "fixed",
  top: 0,
  backgroundColor: "#ffffff",
  zIndex: 3000,
  padding: "5px",
  borderRadius: "5px"
};

export default searchBox;