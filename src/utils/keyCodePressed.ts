const OnKeyCodePressedDoCallback = (keyCode) => (callback) => (e) => {
  if (e.keyCode === keyCode && !e.ctrlKey && !e.shiftKey && !e.altKey && callback) {
    callback()
  }
}

export const OnEscKeyPressedDoCallback = OnKeyCodePressedDoCallback(27)
