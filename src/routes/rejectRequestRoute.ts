import { RouteProps } from './types';

export const rejectRequestRoute: RouteProps = {
  method: 'post',
  path: '/groups/"groupId/requests/:requestId/reject',
  handler: async (req, res) => {},
};
