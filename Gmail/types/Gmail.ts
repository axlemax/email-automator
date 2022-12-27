export type Category =
	| 'forums'
	| 'primary'
	| 'promotions'
	| 'purchases'
	| 'reservations'
	| 'social'
	| 'updates';

export type HasType =
	| Star
	| 'attachment'
	| 'document'
	| 'drive'
	| 'nouserlabels'
	| 'presentation'
	| 'spreadsheet'
	| 'userlabels'
	| 'youtube';
export type Operation = 'archive' | 'delete' | 'trash';
export type Star = StatusIconType | `${StarColor}-star`;
type StarColor = 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'yellow';
type StatusIconType =
	| 'blue-info'
	| 'green-check'
	| 'orange-guillemet'
	| 'purple-question'
	| 'red-bang'
	| 'yellow-bang';
export type Status = 'important' | 'read' | 'starred' | 'unread';
