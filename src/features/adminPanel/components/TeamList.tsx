import { MoreIcon } from '@/assets/icons'
import { Spinner } from '@/components/Elements/Spinner/Spinner'
import { DropDown } from '@/features/adminPanel/components/DropDown'
import React, { useEffect, useState } from 'react'
import { useUiStore } from '@/stores/ui'
import { MainModal } from '@/components/Elements/Modal'
import { SendIvite } from '@/features/adminPanel/components/SendIvite'
import { SendCodeModal } from '@/features/adminPanel/components/SendCodeModal'
import { DeleteTeamModal } from '@/features/adminPanel/components/DeleteTeamModal'
import { EditTeamModal } from '@/features/adminPanel/components/EditTeamModal'
const items = [
  { key: 1, label: 'Изменить права доступа', links: 'editTeamUser' },
  { key: 2, label: 'Отправить код повторно', links: 'sendCodeTeam' },
  { key: 3, label: 'Удалить', links: 'deleteTeamUser' },
]
export const TeamList = ({ data, pending }) => {
  const [actionUser, setActionUser] = useState<{ label: string; key: string }[]>([])
  const { setCurrentModal } = useUiStore()
  const currentUser = data ? data.find((user) => user.id === actionUser[0]?.key) : null
  useEffect(() => {
    const hasNotEmptyUser = actionUser.length > 0 && actionUser[0].label !== ''
    if (hasNotEmptyUser) {
      setCurrentModal(actionUser[0].label)
    }
  }, [actionUser])

  if (data.length > 0)
    return (
      <>
        {data.map((team) => (
          <section key={team.id} className={'flex w-full gap-3'}>
            <img
              className={'rounded-full w-16 h-16 object-cover'}
              src={team.image || '/img/defaultAvatar.svg'}
              alt={team.name}
            />
            <main className={'w-full flex flex-col justify-center'}>
              <div className={'flex justify-between items-center'}>
                <div className={'flex flex-col md:flex-row md:gap-2 max-w-96 md:max-w-52 '}>
                  <p className={'text-title text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis'}>{team.name}</p>
                  <p className={'text-desc text-lg overflow-hidden whitespace-nowrap text-ellipsis'}>{team.email}</p>
                </div>
                <DropDown
                  menu={{ items: items, selectable: true, key: team.id }}
                  setSelectItem={setActionUser}
                >
                  <MoreIcon />
                </DropDown>
              </div>
              <div className={'flex gap-2 flex-wrap'}>
                {team.permissions.map((permission, index) => (
                  <div
                    key={index}
                    className={'border-desc border py-0.5 px-3 rounded-xl text-desc '}
                  >
                    {permission}
                  </div>
                ))}
              </div>
            </main>
            <MainModal modalId={'sendInvite'}>
              <SendIvite />
            </MainModal>
            <MainModal modalId={'editTeamUser'}>
              <EditTeamModal user={actionUser.length > 0 && currentUser} />
            </MainModal>
            <MainModal modalId={'sendCodeTeam'}>
              <SendCodeModal />
            </MainModal>
            <MainModal modalId={'deleteTeamUser'}>
              <DeleteTeamModal userId={actionUser.length > 0 && actionUser[0].key} />
            </MainModal>
          </section>
        ))}
      </>
    )
  else if (pending) return <div className="w-full  flex items-center justify-center">
    <Spinner />
  </div>
  else return (<p>Данных нет</p>)
}
