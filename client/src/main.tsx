import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ReactDOM from "react-dom/client";
import "regenerator-runtime/runtime";
import React from "react";

import App from "./App.tsx";
import "./i18n.ts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ToastContainer theme="light" position="bottom-right" />
    <BrowserRouter>
      <React.Suspense fallback="loading">
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </React.Suspense>
    </BrowserRouter>
  </QueryClientProvider>
);
