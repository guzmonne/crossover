import moment from 'moment'

export const random = max => Math.round(Math.random() * max)

export const randomDate = () => new Date(2016, 0, random(30), random(24), random(60), random(60))

export const parsedDate = date => moment(date).format('MM/DD/YYYY  h:mma')