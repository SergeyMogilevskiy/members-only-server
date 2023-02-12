import { RouteProps } from '../types';
import { getGroup, addMessageToGroup, getMessagesForGroup } from '../db';
import * as admin from 'firebase-admin';

export const createMessageRoute: RouteProps = {
  method: 'post',
  path: '/groups/:id/messages',
  handler: async (req, res) => {
    const token = req.headers.authtoken as string;
    const { id } = req.params;
    const { text } = req.body;

    const group = await getGroup(id);
    const user = await admin.auth().verifyIdToken(token);
    if (!user || !group?.members.includes(user.user_id)) {
      res.status(401).json({ message: 'User is not owner of group!' });
    }

    await addMessageToGroup(id, user.user_id, text);
    const updatedMessages = await getMessagesForGroup(id);

    res.status(200).json(updatedMessages);
  },
};
