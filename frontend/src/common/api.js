import { get } from './requestMethods';

export function getUsers() {
  return get('/users');
}

export function getSingleUser(userId) {
  return get(`/users/${userId}`);
}