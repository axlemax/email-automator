/* eslint-disable @typescript-eslint/sort-type-union-intersection-members */

export type TimeInterval = 'day' | 'month' | 'year';
export type TimePeriod = `${number}${TimeInterval}${'' | 's'}`;
