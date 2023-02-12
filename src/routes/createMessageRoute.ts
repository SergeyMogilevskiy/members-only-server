import { RouteProps } from '../types';

export const createMessageRoute: RouteProps = {
  method: 'post',
  path: '/groups/:id/messages',
  handler: async (req, res) => {},
};
