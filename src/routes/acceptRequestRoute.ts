import { RouteProps } from './types';

export const acceptRequestRoute: RouteProps = {
  method: 'post',
  path: '/groups/:groupId/requests/:requestId/accept',
  handler: async (req, res) => {},
};
