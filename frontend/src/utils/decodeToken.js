Example: src/utils/decodeToken.js
import jwtDecode from 'jwt-decode';

export const decodeToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (err) {
    console.error("Invalid token", err);
    return null;
  }
};
