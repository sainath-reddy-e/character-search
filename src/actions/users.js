import axios from 'axios';

export const loadUsers = () => {
  return async (dispatch) => {
    try {
      const users = await axios.get(
        'https://rickandmortyapi.com/api/character'
      );
      return dispatch(setUsers(users.data.results));
    } catch (error) {
      console.log('error:', error);
    }
  };
};

export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});
