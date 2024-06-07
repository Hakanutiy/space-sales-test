import { Button } from '@/components/Elements/ui/Button'
import { Input } from '@/components/Elements/ui/Input'
import { Select } from '@/features/adminPanel/components/Select'
import { useState } from 'react'
import { CheckBox } from '@/components/Elements/ui/CheckBox'
import { ExitBtnIcon } from '@/assets/icons'
import { useUiStore } from '@/stores/ui'
import { useEditTeamUser } from '@/features/adminPanel/api/editTeamUser'
const items = [
  { key: 1, label: 'Все', component: CheckBox },
  { key: 2, label: 'Модерация объявлений', component: CheckBox },
  { key: 3, label: 'Блог', component: CheckBox },
  { key: 4, label: 'Тех. поддержка', component: CheckBox },
  { key: 5, label: 'Обращения клиентов', component: CheckBox },
  { key: 6, label: 'Аналитика', component: CheckBox },
  { key: 7, label: 'Акции', component: CheckBox },
]
export const EditTeamModal = ({ user }) => {
  const [accessSelect, setAccessSelect] = useState([])
  const { clearCurrentModal, setCurrentModal } = useUiStore()
  const editTeamUser = useEditTeamUser({ config: {} })
  const handleSendEmail = () => {
    editTeamUser.mutate({ id: user.id, permissions: accessSelect })
    clearCurrentModal()
    setCurrentModal('sendCodeTeam')
  }
  return (
    <div className={' w-full flex flex-col gap-2.5 items-center px-12 pb-12 relative '}>
      <div className={' absolute right-0'}>
        <button onClick={() => clearCurrentModal()} className={'bg-base p-3 rounded-xl'}>
          <ExitBtnIcon />
        </button>
      </div>
      <div className={'p-2'}></div>
      <p className={'font-semibold  text-title text-3xl pb-1'}>
        Измените права доступа пользователя
      </p>
      <Select
        menu={{
          selectable: true,
          activeSelect: user.permissions,
          placeholder: 'Выберите права доступа',
          items: items,
        }}
        setSelectItem={setAccessSelect}
        selectItem={accessSelect}
      />
      <Button onClick={handleSendEmail} type={'big-success'}>
        Сохранить изменения
      </Button>
    </div>
  )
}
