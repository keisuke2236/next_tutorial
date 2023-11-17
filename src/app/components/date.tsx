import { parseISO, format } from 'date-fns'

interface DateProps {
  dateString: string
}

export default function Date ({ dateString }: DateProps): JSX.Element | null {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy年MM月dd日')}</time>
}
