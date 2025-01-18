import { useState } from 'react';
import { addCatToFavById } from '../../api/favorites/addCatToFavById';
import { removeCatFromFavById } from '../../api/favorites/removeCatFromFavById';
import { FavButton } from '../Buttons/FavButton';
import { Cat, FavoriteCat } from '../../types/types';
import { useUserId } from '../../hooks/useUserId';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const CatCard = ({ cat }: { cat: Cat | FavoriteCat }) => {
  const { subId } = useUserId();
  const queryClient = useQueryClient();
  const initialIsFav = 'sub_id' in cat || 'favourite' in cat;
  const [isFav, setIsFav] = useState<boolean>(initialIsFav);

  const handleFavToggle = async () => {
    try {
      setIsFav((prev) => !prev);
      if (isFav) {
        await removeCatFromFavById({
          favouriteId:
            (cat as FavoriteCat).favourite?.id || (cat as FavoriteCat).id,
        });
        toast(`Cat removed from favorite!`);
      } else {
        await addCatToFavById({ image_id: (cat as Cat).id, sub_id: subId });
        toast(`Cat added to favorite!`);
      }

      await queryClient.invalidateQueries({
        queryKey: ['cats'],
        refetchType: 'active',
      });
    } catch (error) {
      setIsFav((prev) => !prev);
      toast(`${error}`);
      console.error('Failed to toggle favorite status', error);
    }
  };

  return (
    <div
      className={`flex w-full flex-col rounded-lg overflow-hidden border-[1px] border-white ${
        isFav ? 'border-opacity-30' : 'border-opacity-10'
      }`}
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
