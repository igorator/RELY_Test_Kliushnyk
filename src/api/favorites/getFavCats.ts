import { Cat } from "../../data/types";

export const getFavCats = (breed_ids: string | null = null) => {
  const favCats = JSON.parse(localStorage.getItem("favCats") || "[]");

  if (breed_ids) {
    return favCats.filter((cat: Cat) => cat.breeds[0].id.includes(breed_ids));
  }

  return favCats;
};
