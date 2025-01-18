const BASE_URL = import.meta.env.VITE_CATS_BASE_URL;
const API_KEY = import.meta.env.VITE_CATS_API_KEY;

const ENDPOINT = 'images/search';

const PARAMS = {
  limit: 'limit',
  order: 'order',
  hasBreeds: 'has_breeds',
  breed_ids: 'breed_ids',
  sub_id: 'sub_id',
};

export const getCats = async ({
  limit,
  order,
  hasBreeds = 1,
  breed_ids,
  sub_id,
}: {
  limit: number;
  order: 'ASC' | 'DESC' | 'RAND';
  hasBreeds: 1 | 0;
  breed_ids: string;
  sub_id?: string;
}) => {
  const params = new URLSearchParams({
    [PARAMS.limit]: String(limit),
    [PARAMS.hasBreeds]: String(hasBreeds),
    [PARAMS.order]: order,
  });

  if (breed_ids) {
    params.append(PARAMS.breed_ids, breed_ids);
  }

  if (sub_id) {
    params.append(PARAMS.sub_id, sub_id);
  }

  const url = `${BASE_URL}/${ENDPOINT}?${params.toString()}`;

  const headers = {
    'x-api-key': API_KEY,
  };

  return await fetch(url, { headers }).then((response) => response.json());
};
