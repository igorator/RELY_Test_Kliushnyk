import { useQuery } from "@tanstack/react-query";
import { getCats } from "../api/getCats";

export const useCats = (selectedBreed: string | null) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cats", { selectedBreed }],
    queryFn: () =>
      getCats({
        limit: 8,
        order: "ASC",
        hasBreeds: 1,
        breed_ids: selectedBreed || "",
      }),
    refetchOnWindowFocus: false,
  });

  return {
    cats: data,
    isLoading,
    error,
  };
};
