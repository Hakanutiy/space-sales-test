import {Button} from "@/components/Elements/ui/Button";
import {useUiStore} from "@/stores/ui";
import {Input} from "@/components/Elements/ui/Input";
import {Select} from "@/features/adminPanel/components/Select";
import {CheckBox} from "@/components/Elements/ui/CheckBox";
import {useState} from "react";
import {useCreateTeamUser} from "@/features/adminPanel/api/createTeamsUser";
const items = [
    {key: 1, label: 'Все', component: CheckBox},
    {key: 2, label: 'Модерация объявлений', component: CheckBox},
    {key: 3, label: 'Блог', component: CheckBox},
    {key: 4, label: 'Тех. поддержка', component: CheckBox},
    {key: 5, label: 'Обращения клиентов', component: CheckBox},
    {key: 6, label: 'Аналитика', component: CheckBox},
    {key: 7, label: 'Акции', component: CheckBox},


]
export const CreateUserTeam = () => {
    const { clearCurrentModal, setCurrentModal } = useUiStore()
    const [accessSelect, setAccessSelect] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // тут можно было использовать react hook form, но время немного поджимает
    const createTeam = useCreateTeamUser({config: {}})
    const createUser = () => {
        createTeam.mutate({email: email, name: name, permissions: accessSelect})
        clearCurrentModal()
        setCurrentModal('sendInvite')
    }
    return (
      <div className={' w-full flex flex-col gap-2.5 items-center px-12 py-5 '}>
          <p className={'font-semibold  text-title text-xl text-center pb-1'}>Добавить пользователя</p>
          <Input type={'medium'} placeholder={'Введите имя пользователя'} value={name} onChange={setName} />
          <Input type={'medium'} placeholder={'Введите email пользователя'} value={email} onChange={setEmail}/>
          <Select menu={{selectable: true,  placeholder: 'Выберите права доступа', items: items}} setSelectItem={setAccessSelect} selectItem={accessSelect}/>

          <Button onClick={createUser} type={'big-success'}>Создать пользователя</Button>
      </div>
  )
}