import { RouteProps } from '../types';
import * as admin from 'firebase-admin';
import { getGroup, getMemberPopulatedGroup, getOwnerPopulatedGroup } from '../db';

export const getGroupRoute: RouteProps = {
  method: 'get',
  path: '/groups/:id',
  handler: async (req, res) => {
    const token = req.headers.authtoken as string;
    const { id } = req.params;

    const user = await admin.auth().verifyIdToken(token);

    if (!token || !user) {
      return res.status(401).json({ message: 'Must be logged in to request group info!' });
    }

    const group = await getGroup(id);
    if (group?.ownerId === user.user_id) {
      const ownerPopulatedGroup = await getOwnerPopulatedGroup(id);

      return res.status(200).json(ownerPopulatedGroup);
    }

    if (group?.members.includes(user.user_id)) {
      const memberPopulatedGroup = await getMemberPopulatedGroup(id);

      return res.status(200).json(memberPopulatedGroup);
    }

    res.status(200).json(group);
  },
};
