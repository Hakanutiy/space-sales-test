import {
  DefaultOptions,
  QueryClient,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query'
import { PromiseValue } from 'type-fest'

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
}

export const queryClient = new QueryClient({ defaultOptions: queryConfig })

export type ExtractFnReturnType<FnType extends (...args: any) => any> = PromiseValue<
  ReturnType<FnType>
>

export type MutationConfig<MutationFnType extends (...args: any) => any> =
  UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    any,
    Parameters<MutationFnType>[0]
  >

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>
