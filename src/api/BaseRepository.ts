export abstract class BaseRepository {
  host = import.meta.env.VITE_CATS_BASE_URL;
  headers = {
    "x-api-key": import.meta.env.VITE_CATS_API_KEY,
  };

  abstract path: string;

  sendRequest = async (params: Record<string, string | number>) => {
    const stringParams: Record<string, string> = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [key, String(value)]),
    );

    const url = `${this.host}/${this.path}?${new URLSearchParams(stringParams).toString()}`;
    const response = await fetch(url, { headers: this.headers });
    return await response.json();
  };
}
