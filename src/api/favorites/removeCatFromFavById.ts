export const removeCatFromFavById = ({ id }: { id: string }) => {
  const favCats = JSON.parse(localStorage.getItem("favCats") || "[]");

  const updatedFavCats = favCats.filter((cat: { id: string }) => cat.id !== id);

  localStorage.setItem("favCats", JSON.stringify(updatedFavCats));
};
