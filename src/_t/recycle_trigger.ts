export const recycleTrigger = () =>
	ScriptApp.newTrigger('recycle').timeBased().everyHours(12).create();
