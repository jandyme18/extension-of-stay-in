import axios from 'axios';

// Creates an instance to use with Axios calls

const instance = axios.create({
  baseURL: "http://103.122.112.32:3000/",
  // timeout: 5000,
  headers: {
    "Content-type": "application/json"
  }
});

export default instance;