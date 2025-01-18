import { useUser } from '../context/UserContext';

export const useUserId = () => {
  const { subId, setSubId } = useUser();

  const updateSubId = (newSubId: string) => {
    setSubId(newSubId);
    localStorage.setItem('sub_id', newSubId);
  };

  return { subId, updateSubId };
};
