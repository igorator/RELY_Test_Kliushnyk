import { useEffect, useState } from "react";

import { CatCard } from "../components/Cats/Cards/CatCard";
import { Gallery } from "../shared/components/Gallery";
import { Cat } from "../shared/data/types";
import { useFilter } from "../hooks/useFilter";

import { favCatRepository } from "../api/FavCatsRepository";

export const FavoritePage = () => {
  const { selectedBreed } = useFilter();
  const [favCats, setFavCats] = useState<Cat[]>([]);

  useEffect(() => {
    const cats = favCatRepository.getFavCatsByBreed(selectedBreed);
    setFavCats(cats);
  }, [selectedBreed]);

  const handleRemoveFromFav = (catId: string) => {
    favCatRepository.removeCatFromFavById({ id: catId });
    setFavCats((prevFavCats) => prevFavCats.filter((cat) => cat.id !== catId));
  };

  return (
    <Gallery>
      {favCats.length > 0 ? (
        favCats.map((cat: Cat) => (
          <CatCard
            key={cat.id}
            cat={cat}
            onRemoveFromFav={handleRemoveFromFav}
          />
        ))
      ) : (
        <span>No favorite cats found.</span>
      )}
    </Gallery>
  );
};
