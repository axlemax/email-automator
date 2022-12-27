import { type Query } from '../Query';
import { outputError } from '../common';

export const deleteByQuery = (query: Query) => {
	try {
		const messageNumber = 0;
		let threads = GmailApp.search(`${query}`, messageNumber, 25);
		while (threads.length) {
			Logger.log(`Number of messages: ${threads.length}`);
			for (const thread of threads) {
				const messages = thread.getMessages();
				for (const message of messages) {
					Logger.log(`${message.getSubject()}`);
					message.moveToTrash();
				}
			}

			threads = GmailApp.search(`${query}`, messageNumber, 25);
		}
	} catch (error) {
		Logger.log(`Delete failed with error: ${outputError(error)}`);
	}
};
