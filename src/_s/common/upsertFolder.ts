export const upsertFolder = (name: string) => {
	const folderSearchResults = DriveApp.getFoldersByName(name);
	let zeroByteFolder = folderSearchResults.next();
	if (!zeroByteFolder) zeroByteFolder = DriveApp.createFolder(name);
	return zeroByteFolder;
};
