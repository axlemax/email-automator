import type Query from '../Query';
import { outputError } from '../common';

/**
 * Runs a query and parses through the results by a given number at a time.
 *
 * @param arg0 arguments to use for parsing
 * @param arg0.newSearchEachTime Use a new search each time, helpful if the query will return new
 * messages each time, ex. if deleting messages
 * @param arg0.parseAmount Number of threads to parse for each group of results (maximum returned);
 * @param arg0.query query to use to find threads
 */
export const runQuery = function* ({
	newSearchEachTime = false,
	parseAmount = 25,
	query,
}: {
	/**
	 * Use a new search each time, helpful if the query will return new
	 * messages each time, ex. if deleting messages
	 */
	newSearchEachTime: boolean;
	/**
	 * Number of threads to parse for each group of results (maximum returned)
	 */
	parseAmount: number;
	/**
	 * query to use to find threads
	 */
	query: Query;
}) {
	try {
		let threads = GmailApp.search(`${query}`, 0, parseAmount);
		while (threads) {
			yield threads;
			threads = GmailApp.search(
				`${query}`,
				newSearchEachTime ? 0 : threads.length,
				parseAmount
			);
		}
	} catch (error) {
		Logger.log(`Search failed with error: ${outputError(error)}`);
	}
};
