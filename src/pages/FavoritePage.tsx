import { useEffect, useState } from "react";
import { getFavCats } from "../api/favorites/getFavCats";
import { CatCard } from "../components/Cards/CatCard";
import { Gallery } from "../shared/components/Gallery";
import { Cat } from "../data/types";
import { useFilter } from "../hooks/useFilter";
import { removeCatFromFavById } from "../api/favorites/removeCatFromFavById"; // Импортируем метод для удаления кота

export const FavoritePage = () => {
  const { selectedBreed } = useFilter();
  const [favCats, setFavCats] = useState<Cat[]>([]);

  useEffect(() => {
    const cats = getFavCats(selectedBreed);
    setFavCats(cats);
  }, [selectedBreed]);

  // Функция для удаления кота из избранных
  const handleRemoveFromFav = (catId: string) => {
    removeCatFromFavById({ id: catId }); // Удаляем кота из localStorage
    setFavCats((prevFavCats) => prevFavCats.filter((cat) => cat.id !== catId)); // Обновляем состояние
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
