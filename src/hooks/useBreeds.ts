import { useQuery } from "@tanstack/react-query";
import { breedsRepository } from "../api/BreedsRepository";

export const useBreeds = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["breeds"],
    queryFn: breedsRepository.getBreeds,
    refetchOnWindowFocus: false,
  });

  return {
    breeds: data,
    isLoading,
    error,
  };
};
