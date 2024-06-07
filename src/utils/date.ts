import dayjs, { Dayjs } from 'dayjs'

export type DateType = string | number | Date | Dayjs | null | undefined

const DATE_TIME_FORMAT = 'DD MMM, HH:mm'

export function formatDate(date?: dayjs.ConfigType, format = DATE_TIME_FORMAT): string {
  return dayjs(date).format(format)
}

export const dateUtil = dayjs
