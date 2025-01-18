import { useState, useEffect } from 'react';
import { addCatToFavById } from '../../api/favorites/addCatToFavById';
import { removeCatFromFavById } from '../../api/favorites/removeCatFromFavById';
import { FavButton } from '../Buttons/FavButton';
import { Cat, FavoriteCat } from '../../types/types';
import { useUserId } from '../../hooks/useUserId';

export const CatCard = ({ cat }: { cat: Cat | FavoriteCat }) => {
  const { subId } = useUserId();
  const [isFav, setIsFav] = useState<boolean>(false);

  useEffect(() => {
    if (
      'sub_id' in (cat as FavoriteCat) ||
      (cat as FavoriteCat).favourite?.id
    ) {
      setIsFav(true);
    }
  }, [cat]);

  const handleFavToggle = async () => {
    try {
      if ('sub_id' in cat) {
        await removeCatFromFavById({ favouriteId: cat.id });
      } else {
        await addCatToFavById({ image_id: cat.id, sub_id: subId });
      }

      setIsFav((prev) => !prev);
    } catch (error) {
      console.error('Failed to toggle favorite status', error);
    }
  };

  return (
    <div
      className={`flex flex-col rounded-lg overflow-hidden border-[1px] border-white ${
        isFav ? 'border-opacity-30' : 'border-opacity-10'
      } `}
    >
      <img
        src={(cat as Cat).url || (cat as FavoriteCat).image.url}
        className='w-full h-[300px] object-cover'
      />
      <div className='flex items-center justify-between w-full p-6'>
        {(cat as Cat).breeds?.[0]?.name && (
          <span>{(cat as Cat).breeds[0].name}</span>
        )}
        <FavButton isFav={isFav} onToggle={handleFavToggle} />
      </div>
    </div>
  );
};
