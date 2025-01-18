import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

interface UserContextType {
  subId: string;
  setSubId: (subId: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
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

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
