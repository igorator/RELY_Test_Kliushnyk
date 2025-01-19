import { useState, ReactNode } from 'react';
import { FilterContext } from '../filter/FilterContext';

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
