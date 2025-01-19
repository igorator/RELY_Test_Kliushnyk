import { createContext } from 'react';

interface UserContextType {
  subId: string;
  setSubId: (subId: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);
