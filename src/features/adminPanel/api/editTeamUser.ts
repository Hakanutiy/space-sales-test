import { MutationConfig, queryClient } from '@/lib/react-query'
import { fetcher } from '@/lib/api'
import { EditTeamUser, sendCreateTeam } from '@/entity/ApiTeams'
import { useMutation } from '@tanstack/react-query'
import { getUserMeQueryKey } from '@/features/adminPanel/api/getTeamUsers'

const editTeamUser = ({ id, ...data }: EditTeamUser) => {
  return fetcher(`/teams/${id}`, { data: data, method: 'PATCH' })
}
interface UseTeamOptions {
  config: MutationConfig<typeof editTeamUser>
}

export const useEditTeamUser = ({ config }: UseTeamOptions) => {
  return useMutation({
    ...config,
    mutationFn: editTeamUser,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [getUserMeQueryKey] })
    },
  })
}
