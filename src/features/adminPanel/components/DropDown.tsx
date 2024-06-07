import { IDropDown } from '@/entity/AdminPanel'
import { useRef, useState } from 'react'
import { useOnClickOutside } from '@/components/Hooks/useOnClickOutside'

export const DropDown = ({ menu, children, setSelectItem }: IDropDown) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectedItem = (links) => {
    setSelectItem([{ label: links, key: menu.key }])
    setIsOpen(!isOpen)
  }
  useOnClickOutside(dropdownRef, () => setIsOpen(false))
  return (
    <div
      className="m-1 hs-dropdown [--trigger:hover] relative inline-flex"
      ref={dropdownRef}
    >
      <button onClick={toggleDropdown} className="w-5 h-5">
        {children}
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {menu.items.map((item) => (
              <button
                key={item.key}
                onClick={() => selectedItem(item.links)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
