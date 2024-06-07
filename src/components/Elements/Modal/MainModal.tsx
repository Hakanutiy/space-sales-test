import { FC } from 'react'

import { useUiStore } from '@/stores/ui'

import { Modal, ModalProps } from './Modal'
import { Portal } from '@/components/Elements/Portal'

export const MainModal: FC<ModalProps> = ({ onClose, modalId, ...props }) => {
  const { currentModalId, clearCurrentModal } = useUiStore()

  const _onClose = () => {
    clearCurrentModal()
    onClose && onClose()
  }

  return (
    <Portal selector={'body'}>
      {modalId === currentModalId && (
        <Modal modalId={modalId} onClose={_onClose} {...props} />
      )}
    </Portal>
  )
}
