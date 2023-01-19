import { twiceDailyTrigger } from '../triggerFactory';

export const deleteOldUntitledSsTrigger = () =>
	twiceDailyTrigger('deleteOldUntitledSpreadsheets');
