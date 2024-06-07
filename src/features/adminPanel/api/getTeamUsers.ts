
import { fetcher } from '@/lib/api'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'
import {AdminPanel} from "@/entity/AdminPanel";
import {useQuery} from "@tanstack/react-query";

const getUsersTeam = (): Promise<AdminPanel[]> => {
    return fetcher('/teams', { method: 'GET' })
}

interface UseGetTeamsOptions {
    config: QueryConfig<QueryFnType>
}
type QueryFnType = typeof getUsersTeam

export const getUserMeQueryKey = 'userTeams'

export const useGetTeams = ({ config }: UseGetTeamsOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: [getUserMeQueryKey],
        queryFn: () => getUsersTeam(),
    })
}
