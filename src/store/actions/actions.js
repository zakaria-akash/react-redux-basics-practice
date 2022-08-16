import * as ACTION_TYPES from "./action_types";

export const SUCESS = {
  type: ACTION_TYPES.SUCESS,
};

export const FAILURE = {
  type: ACTION_TYPES.FAILURE,
};

export const sucess = () => {
  return {
    type: ACTION_TYPES.SUCESS,
  };
};

export const failur = () => {
  return {
    type: ACTION_TYPES.FAILURE,
  };
};

export const user_input = (text) => {
  return {
    type: ACTION_TYPES.USER_INPUT,
    payload: text,
  };
};
