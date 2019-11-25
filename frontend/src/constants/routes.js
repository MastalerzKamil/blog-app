export const HOME = '/';
export const USER_DETAILS = (userId = ':userId') => `/user/${userId}`;
export const POST_DETAILS = (userId = ':userId', postId= ':postId') => `/user/${userId}/${postId}`;