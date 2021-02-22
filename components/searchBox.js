import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import ClearIcon from "@material-ui/icons/Clear";

import { useSearch, types } from "../context/searchContext";

const searchBox = () => {
  const [{ value }, dispatch] = useSearch();

  function onChange(e) {
    dispatch({ type: types.SET_VALUE, payload: e.target.value });
  }

  function clear() {
    dispatch({ type: types.SET_VALUE, payload: "" });
  }
  return (
    <Container style={style} maxWidth="md">
      <form>
        <TextField
          color="secondary"
          variant="outlined"
          fullWidth={true}
          placeholder="Search for songs"
          value={value}
          onChange={onChange}
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
  bottom: "70px"
};

export default searchBox;