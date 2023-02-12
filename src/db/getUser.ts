import { User } from '../types';
import { db } from './db';

export async function getUser(id: string) {
  const connection = db.getConnection();
  const user = await connection.collection('users').findOne<User>({ id });

  return user;
}
