import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  users: [],
  error: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        users: action.payload,
        error: ''
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        users: [],
        error: 'Failed to fetch users'
      };
    case 'SORT_ASC':
      return {
        ...state,
        users: [...state.users].sort((a, b) => a.name.localeCompare(b.name)),
      };
    case 'SORT_DESC':
      return {
        ...state,
        users: [...state.users].sort((a, b) => b.name.localeCompare(a.name)),
      };
    default:
      return state;
  }
};

const Users = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  const handleSortAsc = () => {
    dispatch({ type: 'SORT_ASC' });
  };

  const handleSortDesc = () => {
    dispatch({ type: 'SORT_DESC' });
  };

  return (
    <div>
      <div>
        <button onClick={handleSortAsc}>Sort A-Z</button>
        <button onClick={handleSortDesc}>Sort Z-A</button>
      </div>
      {state.loading ? (
        <div>Loading...</div>
      ) : state.error ? (
        <div>{state.error}</div>
      ) : (
        <ul>
          {state.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
