import { FavButton } from "./FavButton";

interface CardProps {
  image: string;
  name: string;
  isFav: boolean;
  addToFavorites: () => void;
  removeFromFavorites: () => void;
}

export const Card = ({
  image,
  name,
  isFav,
  addToFavorites,
  removeFromFavorites,
}: CardProps) => {
  const handleFavToggle = () => {
    if (isFav) {
      removeFromFavorites();
    } else {
      addToFavorites();
    }
  };

  return (
    <div
      className={`flex w-full flex-col rounded-lg overflow-hidden border-[1px] border-white ${
        isFav ? "border-opacity-30" : "border-opacity-10"
      }`}
    >
      <img src={image} alt={name} className="w-full h-[300px] object-cover" />
      <div className="flex items-center justify-between w-full p-6">
        <span>{name}</span>
        <FavButton isFav={isFav} onToggle={handleFavToggle} />
      </div>
    </div>
  );
};
