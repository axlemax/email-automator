export const deleteOldUntitledSpreadsheets = () => {
	const now = new Date().getMilliseconds();
	const sheets = DriveApp.getFilesByName('Untitled spreadsheet');
	while (sheets.hasNext()) {
		const sheet = sheets.next();

		if (
			now - sheet.getLastUpdated().getMilliseconds() >
			7 * 24 * 60 * 60 * 1_000
		) {
			// sheet.setTrashed(true);
			Logger.log(`Found old untitled spreadsheet at ${sheet.getUrl()}`);
		}
	}
};
