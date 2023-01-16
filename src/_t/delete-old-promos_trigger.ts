export const deleteOldPromosTrigger = () =>
	ScriptApp.newTrigger('deleteOldPromos').timeBased().everyHours(12).create();
