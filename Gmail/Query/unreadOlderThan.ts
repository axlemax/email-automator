import { type Time } from '../types/dateAndTime';
import { Query } from '.';

export default (amount: number, interval: Time) => {
	return `${new Query()
		.isNot('read')
		.isNot('starred')
		.isNot('important')
		.olderThan(amount, interval)}`;
};
