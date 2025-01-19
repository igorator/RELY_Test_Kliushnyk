import { Cat } from "../shared/data/types";

class FavCatRepository {
  private getFavCats(): Cat[] {
    return JSON.parse(localStorage.getItem("favCats") || "[]");
  }

  private setFavCats(favCats: Cat[]): void {
    localStorage.setItem("favCats", JSON.stringify(favCats));
  }

  addCatToFavById({
    id,
    breeds,
    url,
  }: {
    id: string;
    breeds: { id: string; name: string }[];
    url: string;
  }): void {
    const favCats = this.getFavCats();

    if (!favCats.some((cat) => cat.id === id)) {
      favCats.push({
        id,
        breeds: breeds.map((breed) => ({ id: breed.id, name: breed.name })),
        url,
      });

      this.setFavCats(favCats);
    }
  }

  removeCatFromFavById({ id }: { id: string }): void {
    const favCats = this.getFavCats();
    const updatedFavCats = favCats.filter((cat) => cat.id !== id);
    this.setFavCats(updatedFavCats);
  }

  getFavCatsByBreed(breed_ids: string | null): Cat[] {
    const favCats = this.getFavCats();

    if (breed_ids) {
      return favCats.filter((cat) =>
        cat.breeds.some((breed) => breed.id.includes(breed_ids)),
      );
    }

    return favCats;
  }
}

export const favCatRepository = new FavCatRepository();
