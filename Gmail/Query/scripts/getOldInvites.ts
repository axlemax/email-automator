import Query from '..';

// Based on https://github.com/motemen/gas-gmail-scripts
const getOldInvites = () => {
	const now = new Date();
	const threads: GoogleAppsScript.Gmail.GmailThread[] = [];

	new Query()
		.fileName('.ics')
		.in('inbox')
		.processThreads((invitationThreads) => {
			for (const thread of invitationThreads) {
				const attachments = thread.getMessages()?.[0]?.getAttachments();
				if (!attachments) continue;

				for (const attachment of attachments) {
					if (!attachment.getName().endsWith('.ics')) {
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
		});

	return threads;
};

export default getOldInvites;
