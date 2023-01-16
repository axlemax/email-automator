export const deleteOldUpdatesTrigger = () =>
	ScriptApp.newTrigger('deleteOldUpdates').timeBased().everyHours(12).create();
