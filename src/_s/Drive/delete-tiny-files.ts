type FileStats = {
	biggest?: GoogleAppsScript.Drive.File;
	count: number;
	smallest?: GoogleAppsScript.Drive.File;
	totalSize: number;
};

export const deleteTinyFiles = () => {
	const allFiles = DriveApp.getFiles();
	let count = 0;
	const fileStats: Record<string, FileStats> = {};

	while (allFiles.hasNext()) {
		count += 1;
		const file = allFiles.next();

		const fileMimeType = file.getMimeType();
		if (!fileStats[fileMimeType])
			fileStats[fileMimeType] = { count: 0, totalSize: 0 };
		fileStats[fileMimeType].count += 1;

		const size = file.getSize();
		fileStats[fileMimeType].totalSize += size;

		if (size < 10) {
			// sheet.setTrashed(true);
			Logger.log(`Found tiny file named ${file.getName()} at ${file.getUrl()}`);
			Logger.log(`MIME type: ${fileMimeType}`);
		}

		// I wound inline these in the conditional statement, but Typescript gets all huffy about the
		// values being possibly undefined 🙄
		const smallestSize =
			fileStats[fileMimeType]?.smallest?.getSize() ?? Number.POSITIVE_INFINITY;
		const biggestSize = fileStats[fileMimeType].smallest?.getSize() ?? 1;

		if (size === 0) {
			Logger.log(`Found 0 byte file: ${file.getName()}`);
			Logger.log(file.getUrl());
		} else if (size < smallestSize) {
			fileStats[fileMimeType].smallest = file;
		} else if (size > biggestSize) {
			fileStats[fileMimeType].biggest = file;
		}

		Logger.log('-- File type counts --');
		for (const [type, typeStats] of Object.entries(fileStats)) {
			Logger.log(
				`${'_'.repeat(18)}Type${'_'.repeat(18)}|___Count___|___Total_Size___|`
			);
			Logger.log(
				`${type}`.padEnd(40) +
					`|${typeStats.count}`.padStart(11) +
					`|${typeStats.totalSize}`.padStart(16)
			);
			Logger.log(` Biggest file\t${typeStats.biggest?.getName()}`);
			Logger.log(`\t${typeStats.biggest?.getUrl()}`);
			Logger.log(` Smallest file\t${typeStats.smallest?.getName()}`);
			Logger.log(`\t${typeStats.smallest?.getUrl()}`);
			Logger.log('-'.repeat(66));
		}

		Logger.log(`TOTAL FILES: ${count}`);
	}
};
