import moment from 'moment';
const prettyDateTime = (date = '') =>
   moment(date).format('DD.MM.YYYY HH:mm:ss');
export default prettyDateTime;
