import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

import GifExpertApp from "./App.jsx";

import theme from "./theme/theme.js";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <GifExpertApp />
  </ChakraProvider>,
  document.getElementById("root")
);
