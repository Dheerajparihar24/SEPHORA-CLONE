/* eslint-disable react/prop-types */
import { Flex, Icon, Text, Box, Image, Badge, Link } from "@chakra-ui/react";

export const IconWithLabel = ({
  icon,
  iconSrc,
  label,
  subLabel,
  badgeCount,
  color = "black",
  subLabelColor = "gray.500",
}) => {
  return (
    <Link style={{ textDecoration: "none" }}>
      <Flex alignItems="center" justify="center" mx={{ base: "1", md: "2" }}>
        {/* Icon Section */}
        <Box position="relative" mr={2}>
          {icon ? (
            <Icon as={icon} w={6} h={6} />
          ) : iconSrc ? (
            <Image src={iconSrc} w={6} h={6} />
          ) : null}

          {/* Love product count */}
          {badgeCount && (
            <Badge
              colorScheme="red"
              position="absolute"
              top="-1"
              right="-1"
              borderRadius="full"
              px={2}
              fontSize="0.75em"
            >
              {badgeCount}
            </Badge>
          )}
        </Box>

        {/* Text Labels Section */}
        <Flex direction="column">
          <Text fontSize="sm" fontWeight="semibold" noOfLines={1} color={color}>
            {label}
          </Text>
          {subLabel && (
            <Text fontSize="xs" color={subLabelColor}>
              {subLabel}
            </Text>
          )}
        </Flex>
      </Flex>
    </Link>
  );
};
