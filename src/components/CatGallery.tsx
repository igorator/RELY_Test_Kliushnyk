import { FavoriteCat, Cat } from '../types/types';
import { CatCard } from './Cards/CatCard';

export const CatList = ({ cats }: { cats: Cat[] | FavoriteCat[] }) => {
  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {cats ? (
        cats.map((cat) => <CatCard key={cat.id} cat={cat} />)
      ) : (
        <span>Cat list is empty</span>
      )}
    </div>
  );
};
