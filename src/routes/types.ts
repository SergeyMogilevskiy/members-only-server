import Express from 'express';

export interface RouteProps {
  method: 'get' | 'post' | 'delete';
  path: string;
  handler: (req: Express.Request, res: Express.Response) => void;
}
