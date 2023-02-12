import { db } from './db';
import { Group } from './getAllGroups';
import { getUser } from './getUser';

export async function getRequestsForGroup(groupId: string) {
  const connection = db.getConnection();
  const requests = await connection.collection('requests').find({ groupId }).toArray();
  const usersForRequests = await Promise.all(requests.map((request) => getUser(request.userId)));
  const populatedRequests = requests.map((request, i) => {
    const user = usersForRequests[i];
    return {
      ...request,
      userName: user ? user.fullName : '',
    };
  });

  return populatedRequests;
}
