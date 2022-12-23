import { outputError } from './Common';
import { fromSender, is, isNot, olderThan, query } from './Query';
import { type Time } from './types';

const deleteByQuery = (queryString: string) => {
  try {
    const messageNumber = 0;
    let threads = GmailApp.search(queryString, messageNumber, 25);
    while (threads.length) {
      Logger.log(`Number of messages: ${threads.length}`);
      for (const thread of threads) {
        const messages = thread.getMessages();
        for (const message of messages) {
          Logger.log(`${message.getSubject()}`);
          message.moveToTrash();
        }
      }

      threads = GmailApp.search(queryString, messageNumber, 25);
    }
  } catch (error) {
    Logger.log(`Delete failed with error ${outputError(error)}error.toString()`);
  }
};

function deleteOldUpdates () {
  const queries = [
    fromSender('noreply@everbridge.net'),
  ];
  for (const que of queries) {
    deleteByQuery(que);
  }
}

const unreadOlderThan = (time: Time, preQuery: string) => {
  return `${preQuery ?? ''}${[
    olderThan(time),
    is('unread'),
    isNot('starred'),
    isNot('important'),
  ].join(' ')}`;
};


