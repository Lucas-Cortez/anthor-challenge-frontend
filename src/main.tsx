import { ChakraProvider, ComponentStyleConfig, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const theme = extendTheme({
  styles: {
    global: {
      "*::-webkit-scrollbar": {
        width: "0px",
        borderRadius: "8px",
        backgroundColor: `rgba(0, 0, 0, 0)`,
      },
      "*::-webkit-scrollbar-thumb": {
        borderRadius: "8px",
        backgroundColor: `rgba(0, 0, 0, 0.1)`,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
