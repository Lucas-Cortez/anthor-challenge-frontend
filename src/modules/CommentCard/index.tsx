import { Avatar, Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";

function Comment() {
  return (
    <>
      <Box px={5} py={3}>
        <Box>
          <Flex alignItems={"center"} mb={2}>
            <Avatar size={"sm"} name="Lucas Cortez" mr={2} />

            <Heading size={"sm"} noOfLines={1}>
              Segun Adebayo
            </Heading>
          </Flex>

          <Text fontSize={"sm"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas animi omnis officiis nobis
            accusamus consectetur libero suscipit reiciendis iusto ullam veniam dignissimos quod harum
            adipisci placeat quibusdam praesentium repellat, rerum maiores! Et recusandae corrupti perferendis
            laboriosam dolor veritatis magni consequatur?
          </Text>
        </Box>
      </Box>
      <Divider borderColor={"gray.600"} />
    </>
  );
}
export { Comment };
