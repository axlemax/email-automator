export const outputError = (error: unknown) =>
	error instanceof Error ? error.message : JSON.stringify(error);
