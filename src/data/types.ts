export interface Cat {
  id: string;
  url: string;
  breeds: Breed[];
}

export interface Breed {
  name: string;
  id: string;
}
