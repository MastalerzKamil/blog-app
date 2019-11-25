import { get } from './requestMethods';

export function getUsers() {
  return get('/users');
}