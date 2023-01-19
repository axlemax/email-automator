import { type TimePeriod } from '@/types/Gmail/dateAndTime';

export const add0 = (number: number) => `${number}`.padStart(2, '0');

export const checkQuery = (query = '') => {
	if (!query) throw new Error('No query specified');
};

export const getDateQuery = (timePeriod: TimePeriod) => {
	const timePeriodStrings = timePeriod.split(/(\d+)/u);
	const amount = timePeriodStrings[1];
	const period = timePeriodStrings[2].at(0);
	return `${amount}${period}`;
};
