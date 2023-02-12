import * as admin from 'firebase-admin';
import { createJoinRequest } from '../db';
import { RouteProps } from '../types';

export const createRequestRoute: RouteProps = {
  method: 'post',
  path: '/groups/:id/requests',
  handler: async (req, res) => {
    const token = req.headers.authtoken as string;
    const { id } = req.params;

    const user = await admin.auth().verifyIdToken(token);
    if (!token || !user) {
      return res.status(401).json({ message: 'Must be logged in to submit request!' });
    }

    await createJoinRequest(id, user.user_id);

    res.status(200).json({ message: 'Success!' });
  },
};
