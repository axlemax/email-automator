import DriveQuery from './DriveQuery';

export default class DriveFileQuery extends DriveQuery {
	// Probably overly clever, but with this queries can be chained
	private readonly getMethod = (method: keyof DriveQuery, operand: string) => {
		return {
			[method]: (value: string) => {
				this.query += ` ${operand}`;
				return this[method](value);
			},
		};
	};

	private readonly _canBeEqual = (operand: string) => ({
		...this.getMethod('equal', operand),
		...this.getMethod('notEqual', operand),
	});

	private readonly _canContain = (operand: string) => ({
		...this.getMethod('contains', operand),
	});

	public readonly name = {
		...this._canContain,
		...this._canBeEqual,
	};

	public [Symbol.iterator]() {
		return DriveApp.searchFiles(this.query);
	}
}
