import { StarIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, Heading, Tag, TagLabel, Text } from "@chakra-ui/react";

interface AvaliationProps {
  onModalOpen(): void;
}

function Avaliation({ onModalOpen }: AvaliationProps) {
  return (
    <Box
      mb={3}
      bgColor={"gray.600"}
      px={5}
      py={3}
      borderRadius={"lg"}
      borderWidth={"1px"}
      borderColor={"transparent"}
      _hover={{
        borderColor: "red.500",
        cursor: "pointer",
      }}
      onClick={onModalOpen}
    >
      <Flex alignItems={"center"} mb={2}>
        <Avatar name="Segun Adebayo" mr={2} />

        <Flex align={"center"}>
          <Tag size={"sm"} bgColor={"gray.700"} color={"white"} mr={2}>
            <StarIcon color={"yellow.500"} mr={1} />
            <TagLabel>10</TagLabel>
          </Tag>
          <Heading size={"sm"} noOfLines={1}>
            Segun Adebayo
          </Heading>
        </Flex>
      </Flex>

      <Text fontSize={"sm"}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas animi omnis officiis nobis
        accusamus consectetur libero suscipit reiciendis iusto ullam veniam dignissimos quod harum adipisci
        placeat quibusdam praesentium repellat, rerum maiores! Et recusandae corrupti perferendis laboriosam
        dolor veritatis magni consequatur?
      </Text>
    </Box>
  );
}

export { Avaliation };
