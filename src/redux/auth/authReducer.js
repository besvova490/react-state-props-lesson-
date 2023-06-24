const INITIAL_STATE = {
  isAuthorized: false,
  user: {}
};

function createReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case "AFTER_USER_LOGIN":
    return { ...state, isAuthorized: true };
  default:
    return state;
  }
}

export default createReducer;
