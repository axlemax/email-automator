import Query from 'Gmail/Query';

// Based on https://www.labnol.org/code/19959-gmail-unsubscribe
const getUnsubscribeMethod = (thread: GoogleAppsScript.Gmail.GmailThread) => {
	const message = thread.getMessages()[0];
	const raw = message.getRawContent();

	// Search for the List Unsubscribe header in the Email Header
	let urls = /^list-unsubscribe:(.|\r\n\s)+<(https?:\/\/[^>]+)>/imu.exec(raw);
	if (urls) {
		// Click the unsubscribe link
		// UrlFetchApp.fetch(urls[2], { muteHttpExceptions: true });
		Logger.log(`Link: ${urls[2]}`);
		return;
	}

	// Find the unsubscribe email
	urls = /^list-unsubscribe:(.|\r\n\s)+<mailto:([^>]+)>/imu.exec(raw);

	if (urls) {
		// Send blank email to unsubscribe
		// GmailApp.sendEmail(urls[2], 'Unsubscribe', 'Unsubscribe');
		Logger.log(`Email: ${urls[2]}`);
		return;
	}

	// Get the HTML of the email
	const body = message.getBody().replace(/\s/gu, '');

	// Regex to find all hyperlinks
	const hrefs = /<a[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>(.*?)<\/a>/giu;

	// Iterate through all hyperlinks inside the message
	while ((urls = hrefs.exec(body))) {
		// Does the anchor text or hyperlink contain words like unsubscribe or optout
		if (
			/unsubscribe|optout|opt-out|remove/iu.test(urls[1]) ||
			/unsubscribe|optout|opt-out|remove/iu.test(urls[2])
		) {
			// Click the unsubscribe link
			// UrlFetchApp.fetch(urls[1], { muteHttpExceptions: true });
			Logger.log(`Link: ${urls[1]}`);
			return;
		}
	}
};

export const listUnsubscribe = () => {
	const search = new Query().category('updates');
	search.processThreads({
		callback: (threads) => {
			for (const thread of threads) {
				getUnsubscribeMethod(thread);
			}
		},
	});
};
