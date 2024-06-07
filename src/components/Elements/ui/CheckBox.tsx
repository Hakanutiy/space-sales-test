export const CheckBox = ({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: () => void
}) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="appearance-none h-6 w-6 border border-gray-300 rounded-md bg-white checked:bg-checked checked:border-transparent checked:after:content-['✓'] checked:after:text-white checked:after:flex checked:after:justify-center checked:after:items-center"
    />
  )
}
