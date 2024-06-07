import { useOnClickOutside } from '@/components/Hooks/useOnClickOutside'
import { useRef, useState, useEffect } from 'react'
import { ISelect } from '@/entity/AdminPanel'
import { DropDownIcon } from '@/assets/icons'
import { SelectOption } from '@/features/adminPanel/components/SelectOption'

export const Select = ({ menu, setSelectItem, selectItem }: ISelect) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (menu.activeSelect && menu.activeSelect.length > 0) {
      setSelectItem(menu.activeSelect)
    }
  }, [menu.activeSelect, setSelectItem])

  const optionSelect = selectItem.map((label) => `${label} `)
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleCheckBoxChange = (label: string) => {
    setSelectItem((prev) => {
      if (label === 'Все') {
        if (prev.includes(label)) {
          return []
        } else {
          return menu.items
            .filter((item) => item.label !== 'Все')
            .map((item) => item.label)
        }
      } else {
        if (prev.includes(label)) {
          return prev.filter((item) => item !== label)
        } else {
          return [...prev, label]
        }
      }
    })
  }

  useOnClickOutside(dropdownRef, () => setIsOpen(false))

  return (
    <div
      className="m-1 hs-dropdown [--trigger:hover] relative inline-flex w-full"
      ref={dropdownRef}
    >
      <div className={'w-full'}>
        <input
          onClick={toggleDropdown}
          value={optionSelect || menu.placeholder}
          type={'button'}
          className="border outline-none rounded-2xl border-desc w-full p-4 relative"
        />
        <div className={'absolute right-4 top-6'}>
          <DropDownIcon />
        </div>
      </div>

      {isOpen && (
        <div className="origin-top-right w-full top-14 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {menu.items.map(({ label, component: Component, key }) => (
              <SelectOption
                key={key}
                selectItem={selectItem}
                label={label}
                Component={Component}
                handleCheckBoxChange={handleCheckBoxChange}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
