import React from "react";
import { Routes, Route } from "react-router-dom";
import { MigrationWizardPage } from "../pages/MigrationWizardPage";
import { ErrorPage } from "../pages/ErrorPage";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MigrationWizardPage />} />
      <Route
        path="*"
        element={<ErrorPage code="404" message="Page not found" />}
      />
    </Routes>
  );
};
