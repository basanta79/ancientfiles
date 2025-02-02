import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import router from "./router.jsx";

const domain = "dev-4i8xuvtsrtxy7e0i.us.auth0.com";
const clientId = "N88BKLmYnHzmVO1buUpinJeHdvqcpkLv";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <ChakraProvider>
        <RouterProvider router={router} />
    </ChakraProvider>
  </Auth0Provider>
);
