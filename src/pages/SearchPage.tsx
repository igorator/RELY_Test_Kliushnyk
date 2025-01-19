import { Gallery } from "../components/Gallery";
import { CatCard } from "../components/Cards/CatCard";
import { useFilter } from "../hooks/useFilter";
import { Cat } from "../data/types";
import { useCats } from "../hooks/useCats";

export const SearchPage = () => {
  const { selectedBreed } = useFilter();
  const { cats, isLoading } = useCats(selectedBreed);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Gallery>
      {!isLoading && cats?.length > 0 ? (
        cats.map((cat: Cat) => <CatCard cat={cat} key={cat.id} />)
      ) : (
        <span>No cats found</span>
      )}
    </Gallery>
  );
};
