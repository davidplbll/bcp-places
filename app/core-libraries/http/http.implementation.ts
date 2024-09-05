
import { IHttp } from './http.contract';



type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';


export class HttpImplementation implements IHttp {

  public async request<T, U = any>(
    method: HttpMethod,
    url: string,
    body?: U,
  ): Promise<T> {

    return await fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:body  as any
    }).then(
      (response)=>response.json() as T
    )
  }

  public get<T, U>(
    url: string,
    body?: U,
  ): Promise<T> {
    if (body) {
      const validData = Object.entries(body).reduce((prev, [key, value]) => {
        if (![null, null, undefined, ''].includes(value as any)) {
          prev = {
            ...prev,
            [key]: value,
          };
        }
        return prev;
      }, {});
      url = `${url}?${new URLSearchParams({
        ...(validData ?? {}),
      }).toString()}`;
    }
    return this.request<T>(
      'GET',
      url,
      undefined,
    );
  }

  public post<T, U>(
    url: string,
    body: U,
  ): Promise<T> {
    return this.request<T, U>(
      'POST',
      url,
      body,
    ).catch((error) => {
      throw error?.response?.data?.message
        ? new Error(error?.response?.data?.message)
        : error;
    });
  }

  public put<T, U>(
    url: string,
    body: U,
    id?: string | number,
  ): Promise<T> {
    if (id) {
      url = `${url}/${id}`;
    }
    return this.request<T, U>('PUT', url, body);
  }

  public patch<T, U>(
    url: string,
    body: U,
  ): Promise<T> {
    return this.request<T, U>(
      'PATCH',
      url,
      body,
    );
  }

  public delete<T, U>(
    url: string,
    id?: string | number | null,
    body?: U,
  ): Promise<T> {
    if (id) {
      url = `${url}/${id}`;
    }
    return this.request<T>( 'DELETE', url, body);
  }
}
