import { UserActionTypes } from "./user.types.js";

const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export default setCurrentUser;
