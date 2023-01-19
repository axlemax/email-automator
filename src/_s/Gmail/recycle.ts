import Query from '../../Gmail/Query';
import { labelProcessed } from '../../Gmail/actions/labelAsProcessed';
import { type TimePeriod } from '@/types/Gmail/dateAndTime';

export const recycle = () => {
	const labels = GmailApp.getUserLabels();
	for (const label of labels) {
		const recycleLabel = label.getName() as TimePeriod;

		if (/Auto-Recycle\/.+/u.test(recycleLabel)) {
			const time = recycleLabel.split('/')[1] as TimePeriod;
			Logger.log(`Found recycle label: ${recycleLabel}`);

			const query = new Query()
				.label(recycleLabel)
				.olderThan(time)
				.isNotIn('trash');
			let count = 0;
			query.processThreadsSync({
				callback: (threads) => {
					labelProcessed('Gmail-Autorecycle', threads);
					for (const thread of threads) {
						thread.moveToTrash();
					}

					count += threads.length;
				},
			});

			Logger.log(
				`Processed ${count} messages labelled ${recycleLabel}, older than ${time}`
			);
		}
	}
};
