const BASE_URL = import.meta.env.VITE_CATS_BASE_URL;
const API_KEY = import.meta.env.VITE_CATS_API_KEY;

const ENDPOINT = 'favourites';

export const addCatToFavById = async ({
  image_id,
  sub_id,
}: {
  image_id: string;
  sub_id: string;
}) => {
  const url = `${BASE_URL}/${ENDPOINT}`;
  const body = JSON.stringify({
    'image_id': image_id,
    'sub_id': sub_id,
  });

  const headers = {
    'content-type': 'application/json',
    'x-api-key': API_KEY,
  };

  return await fetch(url, { method: 'POST', headers, body: body }).then(
    (response) => response.json(),
  );
};
