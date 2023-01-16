import { twiceDailyTrigger } from '../triggerFactory';

export const deleteOldPromosTrigger = () =>
	twiceDailyTrigger('deleteOldPromos');
