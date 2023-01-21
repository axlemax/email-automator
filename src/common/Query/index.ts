import { checkQuery } from './utils';

type Searcher = {
	(...args: any[]): unknown[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(argument: any): unknown[];
};

export default abstract class Query<G extends Searcher> {
	protected search: G;

	protected query: string;

	public constructor(searcher: G, startQuery = '') {
		this.search = searcher;
		this.query = startQuery;
	}

	// ************************************************************************** //
	// ***************************** Query operators **************************** //
	// ************************************************************************** //

	/**
	 * Used in operations that will convert this object to a string.
	 *
	 * @returns the query string
	 */
	public readonly toString = () => this.query;

	// ************************************************************************** //
	// *************************** Execution functions ************************** //
	// ************************************************************************** //

	public *[Symbol.iterator](...searchParameters: Parameters<G>) {
		checkQuery(this.query);
		let queryRun = 0;
		let results = this.search(...searchParameters) as ReturnType<G>;

		while (results.length) {
			yield results;
			Logger.log(`Found ${results.length} threads on query run #${queryRun++}`);
			results = this.search(searchParameters) as ReturnType<G>;
		}
	}

	/**
	 * Gets the number of results returned by the current query
	 */
	public readonly numberOfResults = () => {
		checkQuery(this.query);
		return this.search(this.query).length;
	};
}
