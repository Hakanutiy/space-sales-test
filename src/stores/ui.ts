import create from 'zustand'

interface UiStore {
  currentModalId: string
  setCurrentModal: (modalId: string) => void
  clearCurrentModal: () => void
}

export const useUiStore = create<UiStore>((set) => ({
  currentModalId: null,
  setCurrentModal: (modalId: string) =>
    set(() => ({
      currentModalId: modalId,
    })),
  clearCurrentModal: () =>
    set({
      currentModalId: null,
    }),
}))
