import GmailQuery from '../../Gmail/GmailQuery';

export const printUnsubscribeLinks = () => {
	const query = new GmailQuery()
		.is('unread')
		.isNot('important')
		.olderThan('15days');

	for (const threads of query) {
		for (const thread of threads) {
			const message = thread.getMessages()[0];
			const raw = message.getRawContent();

			// Search for the List Unsubscribe header in the Email Header
			let urls = /^list-unsubscribe:(.|\r\n\s)+<(https?:\/\/[^>]+)>/imu.exec(
				raw
			);
			if (urls) {
				// Click the unsubscribe link
				Logger.log(`Found unsubscribe link in header: ${urls[1]}`);
				// UrlFetchApp.fetch(urls[2], { muteHttpExceptions: true });
			} else {
				// Find the unsubscribe email
				const mailLink =
					/^list-unsubscribe:(.|\r\n\s)+<mailto:([^>]+)>/imu.exec(raw);

				if (mailLink && mailLink?.length > 2) {
					// Send blank email to unsubscribe
					// GmailApp.sendEmail(mailLink[2], 'Unsubscribe', 'Unsubscribe');
					Logger.log(`Found unsubscribe email: ${mailLink[2]}`);
				} else {
					// Get the HTML of the email
					const body = message.getBody().replace(/\s/gu, '');

					// Regex to find all hyperlinks
					const hrefs =
						/<a[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>(.*?)<\/a>/giu;

					// Iterate through all hyperlinks inside the message
					while ((urls = hrefs.exec(body))) {
						// Does the anchor text or hyperlink contain words like unsubscribe or opt-out
						if (
							/unsubscribe|optout|opt-out|remove/iu.test(urls[1]) ||
							/unsubscribe|optout|opt-out|remove/iu.test(urls[2])
						) {
							// Click the unsubscribe link
							// UrlFetchApp.fetch(urls[1], { muteHttpExceptions: true });
							Logger.log(`Found unsubscribe link: ${urls[1]}`);
							break;
						}
					}
				}
			}
		}
	}
};
