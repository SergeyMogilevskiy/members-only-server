import { RouteProps } from './types';

export const createRequestRoute: RouteProps = {
  method: 'post',
  path: '/groups/:id/request',
  handler: async (req, res) => {},
};
