import Query from '..';
import { type TimePeriod } from '@/types/Gmail/dateAndTime';

const getOldUnread = (timePeriod: TimePeriod = '30days') => {
	return new Query()
		.isNot('read')
		.isNot('starred')
		.isNot('important')
		.olderThan(timePeriod);
};

export default getOldUnread;
