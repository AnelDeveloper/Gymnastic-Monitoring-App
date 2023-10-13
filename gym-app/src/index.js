import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxStoreProvider } from "react-redux";
import { store } from "./redux/store";

const root = document.getElementById('root');

createRoot(root).render(
  <ReduxStoreProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxStoreProvider>
);
