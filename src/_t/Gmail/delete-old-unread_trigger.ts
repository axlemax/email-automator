import { twiceDailyTrigger } from '../triggerFactory';

export const deleteOldUnreadTrigger = () =>
	twiceDailyTrigger('deleteOldUnread');
