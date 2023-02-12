import Express from 'express';

export interface RouteProps {
  method: 'get' | 'post' | 'delete';
  path: string;
  handler: (req: Express.Request, res: Express.Response) => void;
}

export interface User {
  _id: string;
  id: string;
  email: string;
  fullName: string;
}

export interface Message {
  _id: string;
  userId: string;
  groupId: string;
  text: string;
}

export interface UserRequest {
  _id: string;
  id: string;
  userId: string;
  groupId: string;
}
