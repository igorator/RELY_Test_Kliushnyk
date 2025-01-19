import './App.css';
import { useQueries } from '@tanstack/react-query';
import { CatGallery } from './components/CatGallery';
import { FilterBar } from './components/FilterBar';
import { getCats } from './api/getCats';
import { getBreeds } from './api/getBreeds';
import { getFavCats } from './api/favorites/getFavCats';
import { useFilter } from './hooks/useFilter';
import { useUserId } from './hooks/useUserId';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const { selectedBreed, onlyFavorite } = useFilter();
  const { subId } = useUserId();

  const queries = useQueries({
    queries: [
      {
        queryKey: ['cats', { selectedBreed, onlyFavorite, subId }],
        queryFn: () => {
          if (onlyFavorite) {
            return getFavCats({
              limit: 8,
              order: 'DESC',
              sub_id: subId,
            });
          }
          return getCats({
            limit: 8,
            order: 'ASC',
            hasBreeds: 1,
            breed_ids: selectedBreed || '',
            sub_id: subId,
          });
        },
        refetchOnWindowFocus: false,
        refetchInterval: false,
      },
      {
        queryKey: ['breeds'],
        queryFn: getBreeds,
        staleTime: 0,
        refetchOnWindowFocus: false,
      },
    ],
  });

  const [catsQuery, breedsQuery] = queries;
  const { data: cats, isLoading: isLoadingCats, error: errorCats } = catsQuery;
  const {
    data: breeds,
    isLoading: isLoadingBreeds,
    error: errorBreeds,
  } = breedsQuery;

  return (
    <main className='w-full flex flex-col max-w-[1440px] mx-auto p-[24px] text-white gap-16'>
      <h1 className='font-bold text-[59px]'>Cats</h1>

      <FilterBar breeds={breeds} isLoading={isLoadingBreeds} />

      <div className='flex flex-col items-center gap-8'>
        {!isLoadingCats && cats ? (
          <CatGallery cats={cats} />
        ) : (
          <span>Loading...</span>
        )}
      </div>

      {errorCats && toast(`${errorCats}`)}
      {errorBreeds && toast(`${errorBreeds}`)}
      <ToastContainer theme='dark' />
    </main>
  );
}

export default App;
