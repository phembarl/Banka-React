import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://banka-andela-43.herokuapp.com/api/v1',
});

export default instance;
