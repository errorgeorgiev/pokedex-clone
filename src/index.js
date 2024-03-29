import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { ChakraProvider } from "@chakra-ui/react";

//Graphql API client
const client = new ApolloClient({
  uri: "https://dex-server.herokuapp.com/",
  cache: new InMemoryCache(),
});


//maybe BrowserRouter is not there
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <ChakraProvider>
        <ApolloProvider client = {client}> 
          <App/>  
        </ApolloProvider>
      </ChakraProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


