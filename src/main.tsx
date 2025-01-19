import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { FilterProvider } from "./context/filter/FilterProvider.tsx";
import { UserProvider } from "./context/user/UserProvider.tsx";
import { queryClient } from "./api/queryClient.ts";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage.tsx";
import { FavoritePage } from "./pages/FavoritePage.tsx";
import { routes } from "./data/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <FilterProvider>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path={routes.root} element={<App />}>
                <Route
                  index
                  element={<Navigate to={routes.search} replace />}
                />
                <Route path={routes.search} element={<SearchPage />} />
                <Route path={routes.favorite} element={<FavoritePage />} />
              </Route>
            </Routes>
          </QueryClientProvider>
        </FilterProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
