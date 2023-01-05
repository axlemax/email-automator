import { scriptEmoji } from '../constants';
import { type SourceScript } from '../types/scripts';

/**
 * Mark one or more threads as processed by a script (in the form of a label)
 *
 * @param sourceScript the script that processed the thread(s)
 * @param threads thread(s) to mark as processed
 */
export const labelProcessed = (
	sourceScript: SourceScript,
	threads:
		| GoogleAppsScript.Gmail.GmailThread
		| GoogleAppsScript.Gmail.GmailThread[]
) => {
	const threadsToProcess = Array.isArray(threads) ? threads : [threads];
	const label = GmailApp.createLabel(
		`♛⚡ ✨🎔SCRIPT (${scriptEmoji[sourceScript]})🎔✨ 🌂📜`
	);
	label.addToThreads(threadsToProcess);
};
