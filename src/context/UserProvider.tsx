import { ReactNode, useState, useEffect } from 'react';
import { UserContext } from './UserContext';

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [subId, setSubId] = useState<string>('');

  useEffect(() => {
    let storedSubId = localStorage.getItem('sub_id');

    if (!storedSubId) {
      storedSubId = `user-${Math.random().toString(36).substr(2, 9)}`; // Генерация случайного ID
      localStorage.setItem('sub_id', storedSubId);
    }

    setSubId(storedSubId);
  }, []);

  return (
    <UserContext.Provider value={{ subId, setSubId }}>
      {children}
    </UserContext.Provider>
  );
};
