const { format } = require('date-fns');

export const postDateFormating = date => format(new Date(date), 'MMM dd p yyyy');
