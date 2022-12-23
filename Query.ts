import { type Category, type Status } from './types';

export const testFunction = (name: string) => {
  Logger.log(`HI ${name}`);
};

export const category = (cat: Category) => {
  return `category:${cat}`;
};

export const is = (status: Status) => {
  return `is:${status}`;
};

export const isNot = (status: Status) => {
  return `NOT is:${status}`;
};

export const fromSender = (string_: string) => {
  return `from:(${string_})`;
};

export const olderThan = (string_: `${number}${string}`) => {
  return `older_than:${string_}`;
};

export const query = (strs: string[]) => {
  let result = '';
  for (const entry of strs) {
    result = `${result} ${entry}`;
  }

  return result;
};