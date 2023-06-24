const INITIAL_STATE = {
  isLoginModalOpen: false,
};

function createReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case "a":
    return INITIAL_STATE
  default:
    return state;
  }
}

export default createReducer;
