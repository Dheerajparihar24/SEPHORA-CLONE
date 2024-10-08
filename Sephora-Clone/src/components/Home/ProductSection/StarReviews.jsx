/* eslint-disable react/prop-types */
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Flex, Box } from "@chakra-ui/react";

export const StarReviews = ({ rating, reviewCount }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index} style={{fontSize:"14px"}}> 
        {rating >= index + 1 ? (
          <FaStar className="icon" color="black"  />
        ) : rating >= number ? (
          <FaStarHalfAlt className="icon" color="black" />
        ) : (
          <AiOutlineStar className="icon" color="black" />
        )}
      </span>
    );
  });

  return (
    <Flex alignItems="center">
      <Box className="icon-style" display="flex" alignItems="center">
        {ratingStar}
        <Box ml={2} fontSize="sm">
          ({reviewCount})
        </Box>
      </Box>
    </Flex>
  );
};
