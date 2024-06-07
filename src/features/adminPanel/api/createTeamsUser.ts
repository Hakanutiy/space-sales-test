import { MutationConfig, queryClient } from '@/lib/react-query'
import { fetcher } from '@/lib/api'
import { sendCreateTeam } from '@/entity/ApiTeams'
import { useMutation } from '@tanstack/react-query'
import { getUserMeQueryKey } from '@/features/adminPanel/api/getTeamUsers'

const createTeamUser = ({ ...data }: sendCreateTeam) => {
  return fetcher('/teams', { data: data, method: 'POST' })
}
interface UseTeamOptions {
  config: MutationConfig<typeof createTeamUser>
}

export const useCreateTeamUser = ({ config }: UseTeamOptions) => {
  return useMutation({
    ...config,
    mutationFn: createTeamUser,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [getUserMeQueryKey] })
    },
  })
}
