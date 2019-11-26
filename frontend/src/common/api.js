import { get } from './requestMethods';

export function getUsers() {
  return get('/users');
}

export function getUserDetails(userId) {
  return get(`/users/${userId}`);
}

export function getPostsByUsersId(userId) {
  return get(`/posts?userId=${userId}`);
}