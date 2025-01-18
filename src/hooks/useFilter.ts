import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import { useQueryClient } from '@tanstack/react-query';

export const useFilter = () => {
  const context = useContext(FilterContext);
  const queryClient = useQueryClient();

  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }

  const { selectedBreed, setSelectedBreed, onlyFavorite, setOnlyFavorite } =
    context;

  const handleSetSelectedBreed = async (breed: string | null) => {
    setSelectedBreed(breed);
    await queryClient.invalidateQueries({
      queryKey: ['cats'],
      refetchType: 'active',
    });
  };

  const handleSetOnlyFavorite = async (value: boolean) => {
    setOnlyFavorite(value);
    await queryClient.invalidateQueries({
      queryKey: ['cats'],
      refetchType: 'active',
    });
  };

  return {
    selectedBreed,
    setSelectedBreed: handleSetSelectedBreed,
    onlyFavorite,
    setOnlyFavorite: handleSetOnlyFavorite,
  };
};
