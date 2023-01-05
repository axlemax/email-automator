/**
 * Values for `category` queries - this is based on content and can be seen the Gmail UI
 */
export type Category =
	| 'forums'
	| 'primary'
	| 'promotions'
	| 'purchases'
	| 'reservations'
	| 'social'
	| 'updates';

	/**
	 * Values for `has:` queries - this refers to the contents or property of a thread
	 */
export type HasType =
	| Mark
	| 'attachment'
	| 'document'
	| 'drive'
	| 'nouserlabels'
	| 'presentation'
	| 'spreadsheet'
	| 'userlabels'
	| 'youtube';

	/**
	 * Label, which has limitations but as a type is just a string - also known as folder or directory
	 */
export type GmailLabel = string;

/**
 * Locations for a thread - refers to the most broad categories of mail, separating threads that
 * are in spam and trash (and old GTalk messages)
 */
export type GmailLocation = 'anywhere' | 'chats' | 'inbox' | 'spam' | 'trash';

/**
 * Actions that can be performed on a thread
 */
export type Operation = 'archive' | 'delete' | 'trash';

/**
 * Gmail's version of flags, shown mostly as stars
 */
export type Mark = MarkIcon | `${MarkColor}-star`;

/**
 * Colors of flag markers
 */
type MarkColor = 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'yellow';

/**
 * Types of flag markers
 */
type MarkIcon =
	| 'blue-info'
	| 'green-check'
	| 'orange-guillemet'
	| 'purple-question'
	| 'red-bang'
	| 'yellow-bang';

	/**
	 * Status of messages - things message can "be" (e.g. a message that is important, or read)
	 */
export type Status = 'important' | 'read' | 'snoozed' | 'starred' | 'unread';
