import { Method, Options, request } from './request'
import { mapSearchParams } from './map-search-params'
import { API_URL } from '@/config'

export const api = request.create(API_URL)

interface Config<P> {
  method: Method
  params?: P
  data?: string | object
  options?: Options
}

export async function fetcher<T, P extends object = object>(
  url: string,
  config: Config<P>,
): Promise<T> {
  try {
    const _url = url + (config?.params ? `?${mapSearchParams(config.params)}` : '')
    const { data } = await api<T>(_url, config?.options, config?.method, config?.data)
    return data
  } catch (error) {
    throw error
  }
}
