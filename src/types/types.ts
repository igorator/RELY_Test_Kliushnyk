export interface Cat {
  id: string;
  url: string;
  breeds: Breed[];
}

export interface FavoriteCat {
  sub_id: string;
  id: number;
  image: { id: string; url: string };
  favourite: {
    id: number;
  };
}

export interface Breed {
  name: string;
  id: string;
  image: object;
}
