import { db } from './db';
import { Group } from './getAllGroups';
import { getUser } from './getUser';

export async function getGroup(groupId: string) {
  const connection = db.getConnection();
  const group = await connection.collection('groups').findOne<Group>({ id: groupId });

  if (!group) return;

  const owner = await getUser(group.ownerId);
  const populatedGroup = {
    ...group,
    owner,
  };

  return populatedGroup;
}
