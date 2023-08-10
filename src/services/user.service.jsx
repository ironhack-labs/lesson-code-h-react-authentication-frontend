import axios from "axios";
import * as CONSTS from "../utils/consts";

const userService = axios.create({
  baseURL: `${CONSTS.SERVER_URL}/user`,
});

export function GET_USER(username, token) {
  return userService.get(`/userInfo`, {
    headers: {
      authorization: token,
    },
  });
}

export function UPDATE_PROFILE(body, token) {
  return userService.put(`/updateUser`, body, {
    headers: {
      authorization: token,
    },
  });
}

export function DELETE_USER(token) {
  return userService.delete(`/deleteUser`, {
    headers: {
      authorization: token,
    },
  });
}
