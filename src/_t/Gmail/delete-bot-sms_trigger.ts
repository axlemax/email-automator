import { twiceDailyTrigger } from '../triggerFactory';

export const deleteBotSmsEmailsTrigger = () =>
	twiceDailyTrigger('deleteBotSmsEmails');
