import getOldInvites from '../Gmail/Query/scripts/getOldInvites';

const deleteOldInvites = () => {
	const oldInvites = getOldInvites();
	for (const thread of oldInvites) {
		Logger.log(`${thread.getFirstMessageSubject()}`);
	}
};
