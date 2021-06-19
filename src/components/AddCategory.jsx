import React, { useState } from "react";
import PropTypes from "prop-types";

import { Box, Input, Button } from "@chakra-ui/react";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //la funcion que modifica el state puede recibir un callback que contiene el estado actual
    //en este caso el estado actual es categories
    if (inputValue.trim() !== "") {
      setCategories((categories) => [inputValue, ...categories]);
      setinputValue("");
    }
  };

  return (
    <Box margin="10px 0px">
      <form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Buscar GIF"
        />
        <Button
          onClick={handleSubmit}
          margin="10px 0px"
          color="white"
          backgroundColor="brand.700"
        >
          Buscar
        </Button>
      </form>
    </Box>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
