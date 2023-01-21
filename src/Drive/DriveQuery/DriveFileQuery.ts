import DriveQuery from './DriveQuery';

export default class DriveFileQuery extends DriveQuery {
	public [Symbol.iterator]() {
		return DriveApp.searchFiles(this.query);
	}
}
