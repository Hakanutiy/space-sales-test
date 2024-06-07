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
      className={'modalWrapper'}
    >
      <div className={'modalBody'}>{children}</div>
    </div>
  )
}
