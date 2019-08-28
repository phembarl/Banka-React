import axios from 'axios';

const token = localStorage.getItem('token');

const instance = axios.create({
  baseURL: 'https://banka-andela-43.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  },
});

export default instance;
