import { FC, ReactElement, useEffect, useRef } from 'react'

import { OnEscKeyPressedDoCallback } from '@/utils/keyCodePressed'

import './index.scss'

export interface ModalProps {
  onClose?: () => void
  onOpen?: () => void
  modalId: string
  children: ReactElement
}

export const Modal: FC<ModalProps> = ({ onClose, onOpen, children }) => {
  const modalWrapperRef = useRef(null)

  const onCloseModal = () => {
    onClose && onClose()
  }

  const onEscape = OnEscKeyPressedDoCallback(onCloseModal)

  useEffect(() => {
    onOpen && onOpen()
    modalWrapperRef.current.focus()
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = 'auto'
    }
  }, [])

  const onClickModalWrapper = (event) => {
    const domNodeBar = modalWrapperRef.current
    if (event.target === domNodeBar) {
      onCloseModal()
    }
  }

  return (
    <div
      ref={modalWrapperRef}
      onClick={onClickModalWrapper}
      role="button"
      onKeyDown={onEscape}
      tabIndex={0}
      className={'fixed inset-0 flex items-center justify-center z-[4444] bg-[rgba(126,124,124,0.28)] backdrop-blur'}
    >
      <div className={'bg-[#f9fafb] p-4 rounded-[1rem] max-w-[526px] w-full'}>{children}</div>
    </div>
  )
}
