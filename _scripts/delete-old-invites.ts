import getOldInvites from '../Gmail/Query/scripts/getOldInvites';

export const deleteOldInvites = () => {
	const oldInvites = getOldInvites();
	for (const thread of oldInvites) {
		Logger.log(`${thread.getFirstMessageSubject()}`);
	}
};
