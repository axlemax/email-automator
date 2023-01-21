import DriveQuery from './DriveQuery';

export default class DriveFolderQuery extends DriveQuery {
	public [Symbol.iterator]() {
		return DriveApp.searchFolders(this.query);
	}
}
