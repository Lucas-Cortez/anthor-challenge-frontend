import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Tag,
  TagLabel,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { MovieCommentsModal } from "../MovieCommentsModal";
import { Avaliation } from "../AvaliationCard";

import { minReadable } from "../../common/utils";

import type { MovieData } from "../../types";

interface MovieDrawerProps {
  onClose(): void;
  isOpen: boolean;
  movie: MovieData | null;
}

function MovieDrawer({ onClose, isOpen, movie }: MovieDrawerProps) {
  const { isOpen: modalIsOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const [seen, setSeen] = useState<boolean>(false);

  if (!movie) return null;

  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size={[null, "full", "lg"]}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader bgColor={"gray.700"} color="white">
            <Flex w={"100%"} align={"center"} justify={"space-between"}>
              <Heading as="h1" size="md">
                {movie.title}
              </Heading>

              <Tooltip hasArrow label={seen ? "seen" : "not seen"}>
                <IconButton
                  aria-label="seen-movie"
                  variant={"link"}
                  size={"xl"}
                  borderLeftRadius={0}
                  _active={{ color: "gray.600" }}
                  onClick={() => {
                    setSeen((b) => !b);
                  }}
                >
                  {seen ? <ViewIcon /> : <ViewOffIcon />}
                </IconButton>
              </Tooltip>

              {/* <Tooltip hasArrow placement="top" label={`Avaliation`}>
                  <Tag bgColor={"gray.400"}>
                    <TagLeftIcon boxSize="12px" as={RottenTomatoIcon} />
                  </Tag>
                </Tooltip> */}

              <Tooltip hasArrow placement="top" label={minReadable(movie.running_time)}>
                <Tag variant={"outline"} color={"red.500"} boxShadow="dark-lg">
                  <TagLabel>{minReadable(movie.running_time)}</TagLabel>
                </Tag>
              </Tooltip>
            </Flex>
          </DrawerHeader>

          <DrawerBody bgColor={"gray.700"} color={"white"}>
            <Divider mb={3} borderColor={"gray.600"} />

            {[1, 2, 3, 4, 5, 6, 7].map((v) => (
              <Avaliation onModalOpen={onModalOpen} />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <MovieCommentsModal isOpen={modalIsOpen} onClose={onModalClose} />
    </>
  );
}

export { MovieDrawer };
