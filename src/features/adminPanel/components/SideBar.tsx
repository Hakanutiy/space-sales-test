
import {NavLink} from 'react-router-dom'
import { AnalitycsIcon, ProfileIcon, ModerIcon, MoneyIcon, ExitIcon, BlogIcon, LogoIcon, TeamsIcon, BannersIcon, MessageIcon } from "@/assets/icons";

const links = [
    {Icon: AnalitycsIcon, to: '/analytics', label: "Аналитика"},
    {Icon: ProfileIcon, to: '/profile', label: "Профиль"},
    {Icon: ModerIcon, to: '/moderation', label: "Модерация"},
    {Icon: MessageIcon, to: '/chat', label: "Чаты"},
    {Icon: BannersIcon, to: '/banner', label: "Баннеры" },
    {Icon: TeamsIcon, to: '/teams', label: "Команда"},
    {Icon: BlogIcon, to: '/blog',  label: "Блог" },
    {Icon: MoneyIcon, to: '/Money', label: "Курс валют"},
    {Icon: ExitIcon, to: '/Exit', label: "Аналитика"},
]
export const SideBar = () => {
  return (
      <div className={"md:items-center relative z-50 isolate flex gap-6 flex-col rounded-r-2xl"}>
          <LogoIcon className="hidden md:block" />
          <div className="flex items-center gap-3">
              <img
                  src="/img/avatar.jpg"
                  className="rounded-full min-w-16 max-w-16 max-h-16 object-cover"
              />
              <div className="md:hidden">
                  <p className="text-title font-semibold"> Эвелина</p>
                  <p className="text-desc">FFF</p>
              </div>
          </div>
          {links.map(({ Icon, to, label }) => (
              <NavLink
                  key={to}
                  className={"py-1 flex items-center gap-4 font-medium text-desc"}
                  to={to}
              >
                  <Icon />
                  <span className="block md:hidden">{label}</span>
              </NavLink>
          ))}
      </div>
  )
}