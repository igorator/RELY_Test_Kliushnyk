import { createContext } from 'react';

interface UserContextType {
  subId: string;
  setSubId: (subId: string) => void;
}

// Создание контекста с типом
export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);
