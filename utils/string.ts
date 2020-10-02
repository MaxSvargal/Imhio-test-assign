export const capitalize = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1)

export const charlLimit = (limit: number, value: string): string =>
  value.length > limit ? `${value.slice(0, limit)}...` : value
