export const SelectOption = ({
  key,
  label,
  Component,
  selectItem,
  handleCheckBoxChange,
}) => {
  return (
    <button
      key={key}
      className="block w-full flex gap-2 items-center text-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
      onClick={() => handleCheckBoxChange(label)}
    >
      {Component && (
        <Component
          checked={selectItem.includes(label)}
          onChange={() => handleCheckBoxChange(label)}
        />
      )}
      {label}
    </button>
  )
}
