const triggerFunctions = [
	'deleteBotSmsEmails',
	'deleteOldInvites',
	'deleteOldPromos',
	'deleteOldUnread',
	'deleteOldUpdates',
	'recycle',
] as const;

export type TriggerFunction = typeof triggerFunctions[number];
