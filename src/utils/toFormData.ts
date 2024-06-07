export function toFormData(formObject) {
  const formData = new FormData()
  for (const d_key in formObject) {
    const formValue = formObject[d_key]
    const hasFormValue = formValue !== undefined
    const hasKeyInFormData = Object.hasOwn(formObject, d_key)
    if (hasKeyInFormData && hasFormValue) {
      const appendValueToFormData = (value) => {
        formData.append(d_key, value)
      }
      if (Array.isArray(formValue)) {
        formValue.forEach(appendValueToFormData)
      } else {
        appendValueToFormData(formValue)
      }
    }
  }
  return formData
}
