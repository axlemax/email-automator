import Query from '../../Gmail/Query';
import { labelProcessed } from '../../Gmail/actions/labelAsProcessed';

// Based on https://github.com/motemen/gas-gmail-scripts
export const deleteOldInvites = () => {
	const now = new Date();
	const threads: GoogleAppsScript.Gmail.GmailThread[] = [];

	new Query()
		.fileName('.ics')
		.in('inbox')
		.processThreads({
			callback: (invitationThreads) => {
				for (const thread of invitationThreads) {
					const attachments = thread.getMessages()?.[0]?.getAttachments();
					if (!attachments) continue;

					for (const attachment of attachments) {
						if (!attachment.getName().endsWith('.ics')) {
							continue;
						}

						Logger.log(
							`Found message containing invite with subject ${thread.getFirstMessageSubject()}`
						);

						// Use ICS format to get invitation date
						const icsContent = attachment.getDataAsString();
						const dateReference =
							// YearMonthDateTHhMmTzZ - 20170714T040000Z
							/^DTEND:([0-9]{4})([0-9]{2})([0-9]{2})T([0-9]{2})([0-9]{2})([0-9]{2})Z$/mu.exec(
								icsContent
							);
						if (!dateReference) {
							continue;
						}

						const eventEnd = new Date(
							`${dateReference[1]}-${dateReference[2]}-${dateReference[3]}T${dateReference[4]}:${dateReference[5]}:00.000Z`
						);

						if (eventEnd < now) {
							labelProcessed('Gmail-Old-Invites', threads);
							GmailApp.moveThreadsToTrash(threads);
						}
					}
				}
			},
		});

	return threads;
};
