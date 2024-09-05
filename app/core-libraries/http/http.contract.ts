export interface IHttp {
  get<T, U>(
    url: string,
    body?: U,
  ): Promise<T>;

  post<T, U>(
    url: string,
    body: U,
  ): Promise<T>;

  patch<T, U>(
    url: string,
    body: U,
  ): Promise<T>;

  put<T, U>(
    url: string,
    body: U,
    id?: string | number | null,
  ): Promise<T>;

  delete<T, U>(
    url: string,
    id?: string | number,
    body?: U,
  ): Promise<T>;
}
