import React from "react";

import { Image, Box, Text, Center } from "@chakra-ui/react";

const GifGridItem = ({ title, img }) => {
  return (
    <>
      <Box
        w="10%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        margin="2"
      >
        <Image src={img} alt={title} />
        <Center>
          <Text fontSize="xs">{title}</Text>
        </Center>
      </Box>
    </>
  );
};

export default GifGridItem;
