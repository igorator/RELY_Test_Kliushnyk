import { createContext, useState, ReactNode } from "react";
import { queryClient } from "../../api/queryClient";

// Типизация контекста
interface FilterContextType {
  selectedBreed: string | null;
  setSelectedBreed: (breed: string | null) => void;
  onlyFavorite: boolean;
  setOnlyFavorite: (value: boolean) => void;
}

// Создание контекста
export const FilterContext = createContext<FilterContextType | undefined>(
  undefined,
);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [onlyFavorite, setOnlyFavorite] = useState<boolean>(false);

  const handleSetSelectedBreed = async (breed: string | null) => {
    setSelectedBreed(breed);
    await queryClient.invalidateQueries({
      queryKey: ["cats", { selectedBreed: breed }],
    });
  };

  const handleSetOnlyFavorite = async (value: boolean) => {
    setOnlyFavorite(value);
    await queryClient.invalidateQueries({
      queryKey: ["cats", { onlyFavorite: value }],
    });
  };

  return (
    <FilterContext.Provider
      value={{
        selectedBreed,
        setSelectedBreed: handleSetSelectedBreed,
        onlyFavorite,
        setOnlyFavorite: handleSetOnlyFavorite,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
