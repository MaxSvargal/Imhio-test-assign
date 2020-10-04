const prependZero = (value: number): string => {
  const strVal = value.toString()
  return strVal.length === 1 ? `0${strVal}` : strVal
}

export const formatDateTime = (value: string): string => {
  try {
    const d = new Date(value)
    return `${d.getFullYear()}.${prependZero(d.getMonth() + 1)}.${prependZero(
      d.getDate()
    )} ${prependZero(d.getHours())}:${prependZero(d.getMinutes())}`
  } catch (err) {
    return ''
  }
}

export const formatTime = (value: string): string =>
  value.slice(0, 2) === '00' ? value.slice(3) : value
