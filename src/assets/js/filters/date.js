import moment from 'moment'

const dateFilter = (value, format = 'DD/MM/Y') => moment(value).format(format)

export default dateFilter
