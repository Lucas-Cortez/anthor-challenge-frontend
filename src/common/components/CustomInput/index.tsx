import { Input, InputProps } from "@chakra-ui/react";

function CustomInput(props: InputProps) {
  return <Input {...props} borderColor={"gray.400"} focusBorderColor={"red.500"} />;
}

export { CustomInput };
