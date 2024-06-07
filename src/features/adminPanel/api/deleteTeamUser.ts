import {MutationConfig, queryClient} from "@/lib/react-query";
import {fetcher} from "@/lib/api";
import {DeleteTeamUser} from "@/entity/ApiTeams";
import {useMutation} from "@tanstack/react-query"
import {getUserMeQueryKey} from "@/features/adminPanel/api/getTeamUsers";


const deleteTeamUser = ({ ...data }: DeleteTeamUser) => {
    return fetcher(`/teams/${data.id}`, {method: 'DELETE'})
}
interface UseTeamOptions {
    config: MutationConfig<typeof deleteTeamUser>
}

export const useDeleteTeamUser = ({ config }: UseTeamOptions) => {
    return useMutation({
        ...config,
        mutationFn: deleteTeamUser,
        onSuccess: () => {
            queryClient.refetchQueries({queryKey: [getUserMeQueryKey]})
        }
    })
}