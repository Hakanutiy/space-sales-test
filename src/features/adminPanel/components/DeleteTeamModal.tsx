import { useUiStore } from '@/stores/ui'
import { Button } from '@/components/Elements/ui/Button'
import { useDeleteTeamUser } from '@/features/adminPanel/api/deleteTeamUser'

export const DeleteTeamModal = ({ userId }) => {
  const { clearCurrentModal } = useUiStore()
  const deleteUser = useDeleteTeamUser({ config: {} })
  const handleDeleteUser = () => {
    deleteUser.mutate({ id: userId })
    clearCurrentModal()
  }
  return (
    <div className={' w-full flex flex-col gap-2.5 items-center px-12 py-5 '}>
      <p className={'font-semibold  text-title text-xl text-center pb-1'}>
        Пользователь успешно удален{' '}
      </p>
      <Button onClick={handleDeleteUser} type={'big-success'}>
        Закрыть
      </Button>
    </div>
  )
}
