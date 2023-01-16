import { twiceDailyTrigger } from '../triggerFactory';

export const deleteOldUpdatesTrigger = () =>
	twiceDailyTrigger('deleteOldUpdates');
