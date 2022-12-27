export const applyLabelToThreads = (
	threads: GoogleAppsScript.Gmail.GmailThread[],
	label: GoogleAppsScript.Gmail.GmailLabel
) => {
	for (const thread of threads) {
		thread.addLabel(label);
	}
};
