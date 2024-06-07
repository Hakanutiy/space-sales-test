import classNames from 'classnames'
import React, { ReactNode } from 'react'

interface InputProps {
  placeholder: string
  type: 'small' | 'medium' | 'big'
  value: string
  onChange: (value: string) => void
}

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  const inputClass = classNames('border rounded-2xl border-desc w-full', {
    'px-3 py-1': type === 'small',
    'p-4': type === 'medium',
    'px-5 py-2': type === 'big',
  })

  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={inputClass}
      type="text"
    />
  )
}
