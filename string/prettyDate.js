import moment from 'moment';
const prettyDate = (date = '') => moment(date).format('DD.MM.YYYY');
export default prettyDate;
