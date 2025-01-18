const BASE_URL = import.meta.env.VITE_CATS_BASE_URL;
const API_KEY = import.meta.env.VITE_CATS_API_KEY;

const ENDPOINT = 'favourites';

const PARAMS = {
  limit: 'limit',
  order: 'order',
  hasBreeds: 'has_breeds',
  breed_ids: 'breed_ids',
  sub_id: 'sub_id',
};

export const getFavCats = async ({
  limit,
  order,
  hasBreeds,
  breed_ids,
  sub_id,
}: {
  limit: number;
  order: 'ASC' | 'DESC' | 'RAND';
  hasBreeds: 1 | 0;
  breed_ids: string;
  sub_id: string;
}) => {
  const params = new URLSearchParams();
  params.append(PARAMS.limit, String(limit));
  params.append(PARAMS.order, order);
  params.append(PARAMS.hasBreeds, String(hasBreeds));
  params.append(PARAMS.breed_ids, breed_ids);
  params.append(PARAMS.sub_id, sub_id);

  const url = `${BASE_URL}/${ENDPOINT}?${params.toString()}`;

  const headers = {
    'content-type': 'application/json',
    'x-api-key': API_KEY,
  };

  return await fetch(url, { headers }).then((response) => response.json());
};
