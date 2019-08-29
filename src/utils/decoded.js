import jwtDecode from 'jwt-decode';

const token = localStorage.getItem('token');
const defaultStatus = { user: { type: 'client' } };

const decodeToken = () => {
  if (!token) return defaultStatus;
  const decoded = jwtDecode(token);
  return decoded;
};

export default decodeToken;
