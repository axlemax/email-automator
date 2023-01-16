export const deleteOldUnreadTrigger = () =>
	ScriptApp.newTrigger('deleteOldUnread').timeBased().everyHours(12).create();
