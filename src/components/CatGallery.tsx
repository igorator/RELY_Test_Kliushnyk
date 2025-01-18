import { FavoriteCat, Cat } from '../types/types';
import { CatCard } from './Cards/CatCard';

export const CatGallery = ({ cats }: { cats: Cat[] | FavoriteCat[] }) => {
  if (cats.length <= 0) return <span>Cat List is empty...</span>;

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full'>
      {cats.length > 0 && cats.map((cat) => <CatCard key={cat.id} cat={cat} />)}
    </div>
  );
};
