import React from "react";

import { Heading, HStack, Spinner, Box, Center } from "@chakra-ui/react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import GifGridItem from "./GifGridItem";
// import { getGifts } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <Heading as="h3" size="md">
        {category}
      </Heading>
      {loading && (
        <Box w="100%" h="100px">
          <Center h="100px">
            <Spinner color="red.500" size="xl" />
          </Center>
        </Box>
      )}

      <HStack h="25%">
        {data.map((item) => {
          return <GifGridItem {...item} key={item.id} />;
        })}
      </HStack>
    </>
  );
};

export default GifGrid;
