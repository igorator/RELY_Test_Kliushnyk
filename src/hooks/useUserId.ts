import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const useUserId = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserId must be used within a UserProvider');
  }

  const { subId, setSubId } = context;

  const updateSubId = (newSubId: string) => {
    setSubId(newSubId);
    localStorage.setItem('sub_id', newSubId);
  };

  return { subId, updateSubId };
};
