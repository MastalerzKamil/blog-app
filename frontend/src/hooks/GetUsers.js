import React, { useState } from 'react';
import * as api from 'common/api';

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    api.getUsers()
      .then(fetchedUsers => setUsers(fetchedUsers))
  },[]);

  return users;
}

export default GetUsers;