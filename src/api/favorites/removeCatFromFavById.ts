const BASE_URL = import.meta.env.VITE_CATS_BASE_URL;
const API_KEY = import.meta.env.VITE_CATS_API_KEY;

const ENDPOINT = 'favourites';

export const removeCatFromFavById = async ({
  favouriteId,
}: {
  favouriteId: number;
}) => {
  const url = `${BASE_URL}/${ENDPOINT}/${favouriteId}`;

  const headers = {
    'content-type': 'application/json',
    'x-api-key': API_KEY,
  };

  return await fetch(url, { method: 'DELETE', headers }).then((response) => {
    return response.json();
  });
};
