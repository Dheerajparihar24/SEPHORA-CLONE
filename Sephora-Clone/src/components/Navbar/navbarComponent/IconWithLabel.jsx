/* eslint-disable react/prop-types */
import { Flex, Icon, Text, Box, Image, Badge, Link } from "@chakra-ui/react";

export const IconWithLabel = ({
  icon,
  iconSrc,
  label,
  subLabel,
  badgeCount,
}) => {
  return (
    <>
      <Link >
        <Flex alignItems="center" justify="center" mx={4}>
          {/* Icon Section */}

          <Box position="relative" mr={2}>
            {icon ? (
              <Icon as={icon} w={7} h={7} />
            ) : iconSrc ? (
              <Image src={iconSrc} w={6} h={6} />
            ) : null}

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

          {/* Text Labels */}
          <Flex direction="column">
            <Text fontSize="sm" fontWeight="semibold">
              {label}
            </Text>
            {subLabel && (
              <Text fontSize="xs" color="gray.500">
                {subLabel}
              </Text>
            )}
          </Flex>
        </Flex>
      </Link>
    </>
  );
};
