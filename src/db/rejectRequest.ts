import { v4 as uuid } from 'uuid';
import { UserRequest } from '../types';
import { db } from './db';

export async function rejectRequest(requestId: string) {
  const connection = db.getConnection();
  await connection.collection('requests').deleteOne({ id: requestId });
}
