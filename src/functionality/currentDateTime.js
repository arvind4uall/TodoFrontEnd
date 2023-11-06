const dt = new Date()
dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset())
export const currentDateTime = dt.toISOString().slice(0, 16)
export const months = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const getDateTime = (dateTime) => {
  const dt = new Date(dateTime)
  const date = `${dt.getDate()} ${months[dt.getMonth()]},${dt.getFullYear()} `
  const years = dt.getFullYear()
  const month = months[dt.getMonth()]
  const day = dt.getDate()
  var hours = dt.getHours()
  hours = hours > 12 && hours % 12
  hours = hours || 12
  const minutes = dt.getMinutes()
  const seconds = dt.getSeconds()
  const ampm = dt.getHours() > 12 ? 'PM' : 'AM'
  return `${day} ${month},${years} ${hours}:${minutes}:${seconds} ${ampm}`
}
