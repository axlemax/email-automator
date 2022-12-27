import Query from '..';
import { type Time } from '../../types/dateAndTime';

export default (amount: number, interval: Time) => {
	return `${new Query()
		.isNot('read')
		.isNot('starred')
		.isNot('important')
		.olderThan(amount, interval)}`;
};
