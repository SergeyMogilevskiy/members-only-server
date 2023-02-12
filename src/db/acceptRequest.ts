import { v4 as uuid } from 'uuid';
import { UserRequest } from '../types';
import { db } from './db';

export async function acceptRequest(requestId: string) {
  const connection = db.getConnection();
  const request = await connection.collection('requests').findOne<UserRequest>({ id: requestId });

  await connection.collection('requests').deleteOne({ id: requestId });
  await connection.collection('groups').updateOne(
    { id: request?.groupId },
    {
      $push: { members: request?.userId },
    }
  );
}
