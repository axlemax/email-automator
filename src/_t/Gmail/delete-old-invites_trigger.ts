import { twiceDailyTrigger } from '../triggerFactory';

export const deleteOldInvitesTrigger = () =>
	twiceDailyTrigger('deleteOldInvites');
