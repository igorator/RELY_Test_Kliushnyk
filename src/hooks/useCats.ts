import { useQuery } from "@tanstack/react-query";
import { catsRepository } from "../api/CatsRepository";

export const useCats = (selectedBreed: string | null) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cats", { selectedBreed }],
    queryFn: () => catsRepository.getCats({ breed_ids: selectedBreed }),

    refetchOnWindowFocus: false,
  });

  return {
    cats: data,
    isLoading,
    error,
  };
};
