import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FilterProvider } from './context/FilterContext.tsx';
import { UserProvider } from './context/UserContext.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <UserProvider>
    <FilterProvider>
      <QueryClientProvider client={queryClient}>
        <StrictMode>
          <App />
        </StrictMode>
      </QueryClientProvider>
    </FilterProvider>
  </UserProvider>,
);
