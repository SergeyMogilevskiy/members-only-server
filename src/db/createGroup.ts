import { v4 as uuid } from 'uuid';
import { db } from './db';

export async function createGroup(groupName: string, userId: string): Promise<string> {
  const connection = db.getConnection();
  const newGroupId = uuid();
  await connection.collection('groups').insertOne({
    id: newGroupId,
    name: groupName,
    ownerId: userId,
    members: [userId],
  });

  return newGroupId;
}
