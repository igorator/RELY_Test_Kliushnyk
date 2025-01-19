import { useState, useEffect } from "react";
import { Card } from "../../shared/components/Card";
import { Cat } from "../../data/types";
import { toast } from "react-toastify";
import { favCatRepository } from "../../api/FavCatsRepository";

export const CatCard = ({
  cat,
  onRemoveFromFav,
}: {
  cat: Cat;
  onRemoveFromFav?: (id: string) => void;
}) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favCats = JSON.parse(localStorage.getItem("favCats") || "[]");
    const isCatFav = favCats.some(
      (favCat: { id: string }) => favCat.id === cat.id,
    );
    setIsFav(isCatFav);
  }, [cat.id]);

  const handleAddToFavorites = () => {
    favCatRepository.addCatToFavById({
      id: cat.id,
      url: cat.url,
      breeds: cat.breeds,
    });
    setIsFav(true);
    toast("Cat added to favorites!");
  };

  const handleRemoveFromFavorites = () => {
    favCatRepository.removeCatFromFavById({ id: cat.id });

    if (onRemoveFromFav) {
      onRemoveFromFav(cat.id);
    }

    setIsFav(false);
    toast("Cat removed from favorites!");
  };

  return (
    <Card
      image={cat.url}
      name={cat.breeds?.[0]?.name || "Unknown Breed"}
      isFav={isFav}
      addToFavorites={handleAddToFavorites}
      removeFromFavorites={handleRemoveFromFavorites}
    />
  );
};
