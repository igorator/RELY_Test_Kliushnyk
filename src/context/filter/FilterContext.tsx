import { createContext } from 'react';

export const FilterContext = createContext<
  | {
      selectedBreed: string | null;
      setSelectedBreed: (breed: string | null) => void;
      onlyFavorite: boolean;
      setOnlyFavorite: (value: boolean) => void;
    }
  | undefined
>(undefined);
