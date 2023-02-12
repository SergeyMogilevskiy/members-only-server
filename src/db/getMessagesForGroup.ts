import { Message } from '../types';
import { db } from './db';
import { Group } from './getAllGroups';
import { getUser } from './getUser';

export async function getMessagesForGroup(groupId: string) {
  const connection = db.getConnection();
  const messages = await connection.collection('messages').find<Message>({ groupId }).toArray();
  const usersForMessages = await Promise.all(messages.map((message) => getUser(message.userId)));
  const populatedMessages = messages.map((message, i) => {
    const user = usersForMessages[i];
    return {
      ...message,
      userName: user ? user.fullName : '',
    };
  });

  return populatedMessages;
}
