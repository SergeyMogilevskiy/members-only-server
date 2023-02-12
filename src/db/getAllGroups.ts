import { db } from './db';
import { getUser } from './getUser';

export interface Group {
  _id: string;
  id: string;
  name: string;
  ownerId: string;
  members: string[];
}

export async function getAllGroups() {
  const connection = db.getConnection();
  const groups = await connection.collection('groups').find().toArray();
  const groupOwners = await Promise.all(groups.map((group) => getUser(group.ownerId)));
  const populatedGroups = groups.map((group, i) => ({
    ...group,
    owner: groupOwners[i],
  }));

  return populatedGroups;
}
