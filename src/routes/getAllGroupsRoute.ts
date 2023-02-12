import { RouteProps } from '../types';
import { getAllGroups } from '../db';
import { getUser } from '../db/getUser';

export const getAllGroupsRoute: RouteProps = {
  method: 'get',
  path: '/groups',
  handler: async (req, res) => {
    const groups = await getAllGroups();
    res.status(200).json(groups);
  },
};
