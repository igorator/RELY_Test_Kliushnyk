import { BaseRepository } from "./BaseRepository";

class BreedsRepository extends BaseRepository {
  path = "breeds";

  getBreeds = async () => {
    return this.sendRequest({});
  };
}

export const breedsRepository = new BreedsRepository();
