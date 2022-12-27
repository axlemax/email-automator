// Based on https://github.com/motemen/gas-gmail-scripts
export default () => {
	const now = new Date();

	// TODO cheange to extension
	const invitationThreads = GmailApp.search('invite.ics in:inbox');

	const threads: GoogleAppsScript.Gmail.GmailThread[] = [];

	for (const thread of invitationThreads) {
		const attachments = thread.getMessages()?.[0]?.getAttachments();
		if (!attachments) continue;

		// Enchancement, filter ?
		for (const attachment of attachments) {
			// TODO cheange to extension
			if (attachment.getName() !== 'invite.ics') {
				continue;
			}

			// Use ICS format to get invitation date
			const icsContent = attachment.getDataAsString();
			const dateReference =
				/^DTEND:([0-9]{4})([0-9]{2})([0-9]{2})T([0-9]{2})([0-9]{2})([0-9]{2})Z$/mu.exec(
					icsContent
				);
			if (!dateReference) {
				continue;
			}

			const eventEnd = new Date(
				Date.UTC(
					Number.parseInt(dateReference[1], 10),
					Number.parseInt(dateReference[2], 10) - 1,
					Number.parseInt(dateReference[3], 10),
					Number.parseInt(dateReference[4], 10),
					Number.parseInt(dateReference[5], 10),
					Number.parseInt(dateReference[6], 10)
				)
			);

			if (eventEnd < now) {
				threads.push(thread);
			}
		}
	}

	return threads;
};
