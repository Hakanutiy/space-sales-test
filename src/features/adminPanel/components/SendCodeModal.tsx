import { Button } from '@/components/Elements/ui/Button'
import { useUiStore } from '@/stores/ui'

export const SendCodeModal = () => {
  const { clearCurrentModal } = useUiStore()

  return (
    <div className={' w-full flex flex-col gap-2.5 items-center px-12 py-5 '}>
      <p className={'font-semibold  text-title text-xl text-center pb-1'}>
        Приглашение отправлено на почту example@email.com
      </p>
      <Button onClick={() => clearCurrentModal()} type={'big-success'}>
        Закрыть
      </Button>
    </div>
  )
}
