import getOldUnread from '../Gmail/Query/scripts/getOldUnread';
import { labelProcessed } from '../Gmail/actions/labelAsProcessed';

export const deleteOldUnread = () => {
	const query = getOldUnread('1month');
	let count = 0;

	query.processThreads({
		callback: (threads) => {
			count += threads.length;
			labelProcessed('Gmail-Old-Unread', threads);
			GmailApp.moveThreadsToTrash(threads);
		},
	});
	Logger.log(`Processed ${count} old unread threads`);
};
