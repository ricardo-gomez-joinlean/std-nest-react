import Axios from "axios"

const axios = Axios.create({
  baseURL: 'http://localhost:3001/api/'
});

export default axios;