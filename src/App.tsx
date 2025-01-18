import { useQuery } from '@tanstack/react-query';
import { CatList } from './components/CatGallery';
import { FilterBar } from './components/FilterBar';
import { getCats } from './api/getCats';
import { getBreeds } from './api/getBreeds';
import { getFavCats } from './api/favorites/getFavCats';
import { useFilter } from './hooks/useFilter';
import { useUserId } from './hooks/useUserId';
import './App.css';

function App() {
  const { selectedBreed, onlyFavorite } = useFilter();
  const { subId } = useUserId();

  const {
    data: cats,
    error: errorCats,
    isLoading: isLoadingCats,
  } = useQuery({
    queryKey: ['cats', { selectedBreed, onlyFavorite, subId }],
    queryFn: () => {
      if (onlyFavorite) {
        return getFavCats({
          limit: 8,
          order: 'ASC',
          hasBreeds: 1,
          breed_ids: selectedBreed || '',
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
  });

  const {
    data: breeds,
    error: errorBreeds,
    isLoading: isLoadingBreeds,
  } = useQuery({
    queryKey: ['breeds'],
    queryFn: getBreeds,
    refetchOnWindowFocus: false,
  });

  console.log(cats);

  return (
    <main className='w-full flex flex-col max-w-[1440px] mx-auto p-[24px] text-white gap-16'>
      <h1 className='font-bold text-[59px]'>Cats</h1>

      <FilterBar breeds={breeds} isLoading={isLoadingBreeds} />

      {isLoadingCats ? <div>Loading Cats...</div> : <CatList cats={cats} />}

      {errorCats && <div>Error: {`${errorCats}`}</div>}
      {errorBreeds && <div>Error: {`${errorBreeds}`}</div>}
    </main>
  );
}

export default App;
