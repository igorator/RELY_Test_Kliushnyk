const BASE_URL = import.meta.env.VITE_CATS_BASE_URL;
const API_KEY = import.meta.env.VITE_CATS_API_KEY;

const ENDPOINT = 'breeds';

export const getBreeds = async () => {
  const params = new URLSearchParams();

  const url = `${BASE_URL}/${ENDPOINT}?${params.toString()}`;

  const headers = {
    'x-api-key': API_KEY,
  };

  return await fetch(url, { headers }).then((response) => response.json());
};
