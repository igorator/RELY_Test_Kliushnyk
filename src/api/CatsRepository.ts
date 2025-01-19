import { BaseRepository } from "./BaseRepository";

class CatsRepository extends BaseRepository {
  path = "images/search";
  pageSize = 8;
  hasBreeds = 1;
  order = "ASC";

  getCats = async (params: { breed_ids: string | null }) => {
    const newParams: { [key: string]: string | number } = {
      limit: this.pageSize,
      order: this.order,
      has_breeds: this.hasBreeds,
    };

    if (params.breed_ids) {
      newParams.breed_ids = params.breed_ids;
    }

    return this.sendRequest(newParams);
  };
}

export const catsRepository = new CatsRepository();
