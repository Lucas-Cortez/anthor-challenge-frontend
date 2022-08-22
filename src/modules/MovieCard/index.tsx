import { Box, Button, Icon, ScaleFade } from "@chakra-ui/react";
import { IMovieData } from "../../interfaces/IMovieData";

interface Props {
  onClick(): void;
  movie: IMovieData;
}

function MovieCard({ onClick, movie }: Props) {
  return (
    <ScaleFade initialScale={0.5} in={true}>
      <Box
        w={300}
        height={450}
        boxShadow="xl"
        borderRadius={"lg"}
        style={{ cursor: "pointer" }}
        borderColor={"transparent"}
        borderWidth={1}
        _hover={{
          transition: "all 0.08s ease-in-out",
          borderColor: "red.500",
        }}
        onClick={onClick}
        bgImage={movie.image_url}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      />
    </ScaleFade>
  );
}

export { MovieCard };
