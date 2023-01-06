import Query from '../Query';
import { type TimePeriod } from '../types/dateAndTime';

const getOldUnread = (timePeriod: TimePeriod = '30days') => {
	return `${new Query()
		.isNot('read')
		.isNot('starred')
		.isNot('important')
		.olderThan(timePeriod)}`;
};

export default getOldUnread;
