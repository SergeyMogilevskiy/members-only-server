import { v4 as uuid } from 'uuid';
import { db } from './db';

export async function createJoinRequest(groupId: string, userId: string) {
  const connection = db.getConnection();
  await connection.collection('requests').insertOne({ id: uuid(), groupId, userId });
}
