export type Date = { day: number; month: number; year: number };

export type TimeInterval = 'day' | 'month' | 'year';
export type Time = `${TimeInterval}${'' | 's'}`;
