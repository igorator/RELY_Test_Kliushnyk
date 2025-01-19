export const addCatToFavById = ({
  id,
  breeds,
  url,
}: {
  id: string;
  breeds: {
    id: string;
    name: string;
  }[];
  url: string;
}) => {
  const favCats = JSON.parse(localStorage.getItem("favCats") || "[]");

  // Проверяем, есть ли уже кот с таким ID в избранных
  if (favCats.some((cat: { id: string }) => cat.id === id)) {
    return;
  }

  // Формируем новый объект кота для добавления в избранное
  const newCat = {
    id: id,
    breeds: breeds.map((breed) => ({
      id: breed.id,
      name: breed.name,
    })),
    url,
  };

  favCats.push(newCat);

  localStorage.setItem("favCats", JSON.stringify(favCats));
};
