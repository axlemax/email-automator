import getOldUnread from 'Gmail/GmailQuery/scripts/getOldUnread';
import { labelProcessed } from 'Gmail/actions/labelAsProcessed';

export const deleteOldUnread = () => {
	const query = getOldUnread('1month');
	let count = 0;

	for (const threads of query) {
		count += threads.length;
		labelProcessed('Gmail-Old-Unread', threads);
		GmailApp.moveThreadsToTrash(threads);
	}

	Logger.log(`Processed ${count} old unread threads`);
};
