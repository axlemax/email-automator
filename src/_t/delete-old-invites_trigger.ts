export const deleteOldInvitesTrigger = () =>
	ScriptApp.newTrigger('deleteOldInvites').timeBased().everyHours(12).create();
