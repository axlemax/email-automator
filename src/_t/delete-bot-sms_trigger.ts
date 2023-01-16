export const deleteBotSmsEmailsTrigger = () =>
	ScriptApp.newTrigger('deleteBotSmsEmails')
		.timeBased()
		.everyHours(12)
		.create();
