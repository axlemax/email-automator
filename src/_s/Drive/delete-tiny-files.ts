export const deleteTinyFiles = () => {
	const allFiles = DriveApp.getFiles();
	while (allFiles.hasNext()) {
		const file = allFiles.next();

		if (file.getSize() < 10)
			// sheet.setTrashed(true);
			Logger.log(`Found tiny file at ${file.getUrl()}`);
	}
};
