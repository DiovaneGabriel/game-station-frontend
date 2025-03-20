import axios from "axios";

const client = axios.create({
    baseURL: __ENV__.BACKEND_URL
  });

export default client;