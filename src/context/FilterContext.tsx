import { createContext, useState, ReactNode } from 'react';

export const FilterContext = createContext<
  | {
      selectedBreed: string | null;
      setSelectedBreed: (breed: string | null) => void;
      onlyFavorite: boolean;
      setOnlyFavorite: (value: boolean) => void;
    }
  | undefined
>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [onlyFavorite, setOnlyFavorite] = useState<boolean>(false);

  return (
    <FilterContext.Provider
      value={{
        selectedBreed,
        setSelectedBreed,
        onlyFavorite,
        setOnlyFavorite,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
