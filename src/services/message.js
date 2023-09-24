import axios from "axios";

// const BASE_URL = "https://";
// const BASE_URL = 'http://localhost:3030/api';
const BASE_URL = "https://salamandrabackend.studentvlad5.repl.co/api";

export function leaveMessage(body) {
  return axios.post(`${BASE_URL}/message`, body, {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
    },
  });
}
