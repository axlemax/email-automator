import GmailQuery from '..';
import { type TimePeriod } from '@/types/Gmail/dateAndTime';

const getOldUnread = (timePeriod: TimePeriod = '30days') => {
	return new GmailQuery()
		.isNot('read')
		.isNot('starred')
		.isNot('important')
		.olderThan(timePeriod);
};

export default getOldUnread;
