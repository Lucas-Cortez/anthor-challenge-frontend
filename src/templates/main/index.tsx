import React, { useEffect, useState } from "react";
import { CreateMovieModal } from "../../modules/CreateMovieModal/CreateMovieModal";
import { MovieCard } from "../../modules/MovieCard";
import { MovieDrawer } from "../../modules/MovieDrawer";
import { Flex, SimpleGrid, useDisclosure } from "@chakra-ui/react";

import { axiosInstance } from "../../config/axios";

import type { MovieData } from "../../types";

function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawerMovie, setDrawerMovie] = useState<MovieData | null>(null);

  const [data, setData] = useState<MovieData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | unknown>(false);

  const handleDrawerClick = (movie: MovieData) => {
    onOpen();
    setDrawerMovie(movie);
  };

  const loadData = async () => {
    try {
      const data = await axiosInstance.get("/movie");
      setData(data.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) return <h1>loading...</h1>;
  if (error) return <h1>error...</h1>;

  return (
    <>
      <CreateMovieModal />

      <Flex justify={"center"} width="100%" m="auto" pt={10}>
        <SimpleGrid columns={[1, null, 2, null, 3, 4]} spacing="40px">
          {data.map((res) => (
            <MovieCard key={res.movie_id} onClick={() => handleDrawerClick(res)} movie={res} />
          ))}
        </SimpleGrid>
      </Flex>

      <MovieDrawer isOpen={isOpen} onClose={onClose} movie={drawerMovie} />
    </>
  );
}

export { Main };
