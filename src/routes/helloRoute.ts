import Express from 'express';

export const helloRoute: HelloRouteProps = {
  method: 'get',
  path: '/hello',
  handler: (req, res) => {
    res.send('Hello!');
  },
};

interface HelloRouteProps {
  method: 'get' | 'post';
  path: string;
  handler: (req: Express.Request, res: Express.Response) => void;
}
