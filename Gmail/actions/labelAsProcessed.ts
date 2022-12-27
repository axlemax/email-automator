import { scriptEmoji } from '../constants';
import { type SourceScript } from '../types/scripts';

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
	for (const thread of threadsToProcess) {
		thread.addLabel(label);
	}
};
