const driveTriggerFunctions = ['deleteOldUntitledSpreadsheets'] as const;

const gmailTriggerFunctions = [
	'deleteBotSmsEmails',
	'deleteOldInvites',
	'deleteOldPromos',
	'deleteOldUnread',
	'deleteOldUpdates',
	'recycle',
] as const;

export type TriggerFunction =
	| typeof driveTriggerFunctions[number]
	| typeof gmailTriggerFunctions[number];
