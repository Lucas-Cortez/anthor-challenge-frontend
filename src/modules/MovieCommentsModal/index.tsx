import { ArrowRightIcon, StarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  IconButton,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { CustomInput } from "../../common/components";
import { Comment } from "../CommentCard";

interface MovieCommentsModalProps {
  isOpen: boolean;
  onClose(): void;
  //   onOpen(): void;
}

function MovieCommentsModal({ isOpen, onClose }: MovieCommentsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={["full", "full", "xl"]} scrollBehavior={"inside"}>
      <ModalOverlay />
      <ModalContent bgColor={"gray.700"} color={"white"}>
        <ModalCloseButton />

        <ModalHeader>
          {/* {movie.title} avaliation */}
          Title
        </ModalHeader>

        <ModalBody>
          <Box bgColor={"gray.600"} px={5} py={3} mb={2} borderRadius={"lg"}>
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

            <Text fontSize={"md"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas animi omnis officiis nobis
              accusamus consectetur libero suscipit reiciendis iusto ullam veniam dignissimos quod harum
              adipisci placeat quibusdam praesentium repellat, rerum maiores! Et recusandae corrupti
              perferendis laboriosam dolor veritatis magni consequatur?
            </Text>
          </Box>

          {[1, 2, 3, 4, 5, 6, 7].map((v) => (
            <Comment />
          ))}
        </ModalBody>

        <ModalFooter>
          <InputGroup>
            <CustomInput borderRightRadius={0} placeholder="Send a message..." borderRightWidth={0} />

            <IconButton
              aria-label="send-comment"
              borderLeftRadius={0}
              bgColor={"red.500"}
              _hover={{ bgColor: "red.600" }}
              _active={{ bgColor: "red.700" }}
            >
              <ArrowRightIcon w={3} h={3} />
            </IconButton>
          </InputGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export { MovieCommentsModal };
