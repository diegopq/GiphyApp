import React, { useState } from "react";

import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

import { OrderedList, Text } from "@chakra-ui/react";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <>
      <Text fontSize="3xl" color="deepskyblue">
        GifExpertApp
      </Text>
      <AddCategory setCategories={setCategories} />
      <hr />
      <OrderedList margin="9px">
        {categories.map((item) => {
          return <GifGrid category={item} key={item} />;
        })}
      </OrderedList>
    </>
  );
};

export default GifExpertApp;
