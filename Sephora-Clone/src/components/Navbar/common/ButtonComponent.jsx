/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";

export const ButtonComponent = ({
  variant,
  bg,
  colorScheme,
  borderRadius,
  width,
  value,
  height,
}) => {
  return (
    <Button
      variant={variant}
      bg={bg}
      colorScheme={colorScheme}
      backgroundColor={bg}
      width={width}
      borderRadius={borderRadius}
      height={height}
    >
      {value}
    </Button>
  );
};
