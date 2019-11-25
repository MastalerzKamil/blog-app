import React from 'react';
// import { PropTypes } from 'prop-types';
import { UsersGrid } from './components'
import { GetUsers } from 'hooks';

const Homepage = () => {
  const fetchedUsers = GetUsers();
  console.log(fetchedUsers);
  return (
    <UsersGrid />
  )
}

export default Homepage;