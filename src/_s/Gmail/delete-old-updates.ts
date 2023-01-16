import Query from '../../Gmail/Query';
import { labelProcessed } from '../../Gmail/actions/labelAsProcessed';

export const deleteOldUpdates = () => {
	const query = new Query()
		.category('updates')
		.isNot('starred')
		.olderThan('15days')
		.isNot('read');
	let count = 0;

	query.processThreads({
		callback: (threads) => {
			count += threads.length;
			labelProcessed('Gmail-Old-Updates', threads);
			GmailApp.moveThreadsToTrash(threads);
		},
	});
	Logger.log(`Processed ${count} old updates`);
};
