import { db } from './db';

export async function addMessageToGroup(groupId: string, userId: string, text: string) {
  const connection = db.getConnection();
  await connection.collection('messages').insertOne({
    userId,
    groupId,
    text,
  });
}
