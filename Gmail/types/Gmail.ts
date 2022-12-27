export type Category =
	| 'forums'
	| 'primary'
	| 'promotions'
	| 'purchases'
	| 'reservations'
	| 'social'
	| 'updates';

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
export type GmailLabel = string;
export type GmailLocation = 'anywhere' | 'inbox' | 'spam' | 'trash';
export type Operation = 'archive' | 'delete' | 'trash';
export type Mark = MarkIcon | `${MarkColor}-star`;
type MarkColor = 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'yellow';
type MarkIcon =
	| 'blue-info'
	| 'green-check'
	| 'orange-guillemet'
	| 'purple-question'
	| 'red-bang'
	| 'yellow-bang';
export type Status = 'important' | 'read' | 'starred' | 'unread';
