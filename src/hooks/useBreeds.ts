import { useQuery } from "@tanstack/react-query";
import { getBreeds } from "../api/getBreeds";

export const useBreeds = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["breeds"],
    queryFn: getBreeds,
    refetchOnWindowFocus: false,
  });

  return {
    breeds: data,
    isLoading,
    error,
  };
};
