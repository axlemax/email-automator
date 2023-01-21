export const upsertFolder = (name: string) => {
	const folderSearchResults = DriveApp.getFoldersByName(name);
	let folder = folderSearchResults.next();
	if (!folder) folder = DriveApp.createFolder(name);
	return folder;
};
