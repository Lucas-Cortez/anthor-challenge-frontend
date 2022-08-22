import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CustomInput } from "../../common/components/CustomInput";

function CreateMovieModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [createInputs, setCreateInputs] = useState({
    movie_id: "",
    title: "",
    director: "",
    image_url: "",
    year: "",
    running_time: "",
    cast: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCreateInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(createInputs);
  };

  return (
    <>
      <Tooltip hasArrow placement={"top"} label={"Add Movie"}>
        <IconButton
          aria-label="add-movie"
          size={"lg"}
          pos="fixed"
          bottom={[10, 12]}
          right={[8, 16]}
          rounded={"full"}
          bgColor={"red.500"}
          _hover={{ bgColor: "red.600" }}
          _active={{ bgColor: "red.700" }}
          onClick={onOpen}
        >
          <AddIcon color={"white"} />
        </IconButton>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"} size={["full", "full", "xl"]}>
        <ModalOverlay />

        <ModalContent bgColor={"gray.700"} color={"white"}>
          <ModalCloseButton />

          <ModalHeader>Movie Creation 🎬</ModalHeader>

          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired mb={2}>
                <FormLabel>Title</FormLabel>
                <CustomInput
                  onChange={handleInputChange}
                  value={createInputs.title}
                  name={"title"}
                  placeholder={"The Last..."}
                />
              </FormControl>

              <FormControl isRequired mb={2}>
                <FormLabel>Director</FormLabel>
                <CustomInput
                  onChange={handleInputChange}
                  value={createInputs.director}
                  name={"director"}
                  placeholder={"John..."}
                />
              </FormControl>

              <FormControl isRequired mb={2}>
                <FormLabel>URL Banner Image (2:3)</FormLabel>
                <CustomInput
                  onChange={handleInputChange}
                  value={createInputs.image_url}
                  name={"image_url"}
                  placeholder={"https://image.png..."}
                />
              </FormControl>

              <FormControl isRequired mb={2}>
                <FormLabel>Year</FormLabel>
                <CustomInput
                  onChange={handleInputChange}
                  value={createInputs.year}
                  name={"year"}
                  placeholder={"1970..."}
                />
              </FormControl>

              <FormControl isRequired mb={2}>
                <FormLabel>Running Time (Min)</FormLabel>
                <CustomInput
                  onChange={handleInputChange}
                  value={createInputs.running_time}
                  name={"running_time"}
                  placeholder={"120..."}
                />
              </FormControl>

              <FormControl isRequired mb={2}>
                <FormLabel>Cast</FormLabel>
                <CustomInput
                  onChange={handleInputChange}
                  value={createInputs.cast}
                  name={"cast"}
                  placeholder={"John Doe, Jane..."}
                />
              </FormControl>

              <Flex w={"100%"} justify={"flex-end"} my={5}>
                <Button type="submit" bgColor={"red.500"}>
                  Save
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { CreateMovieModal };
