import * as admin from 'firebase-admin';
import { RouteProps } from '../types';
import { rejectRequest, getGroup, getRequestsForGroup } from '../db';

export const rejectRequestRoute: RouteProps = {
  method: 'post',
  path: '/groups/:groupId/requests/:requestId/reject',
  handler: async (req, res) => {
    const token = req.headers.authtoken as string;
    const { groupId, requestId } = req.params;

    const group = await getGroup(groupId);
    const user = await admin.auth().verifyIdToken(token);

    if (!user || group?.ownerId !== user.user_id) {
      return res.status(400).json({ message: 'User is not owner of group' });
    }

    await rejectRequest(requestId);
    const updatedRequests = await getRequestsForGroup(groupId);

    res.status(200).json(updatedRequests);
  },
};
