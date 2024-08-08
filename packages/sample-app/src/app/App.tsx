import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import React from "react";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
