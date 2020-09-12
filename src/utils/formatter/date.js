import moment from 'moment';

export const formatSetDate = (date) => {
  const formattedDate = moment(date).format('MMMM DD, YYYY');
  return formattedDate;
};
