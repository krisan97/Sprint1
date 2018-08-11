import {
  SELECT_LIBRARY,
  RESET_RESOURCE
} from '../../actions/types';

const INITIAL_STATE = {
  library: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_LIBRARY:
      console.log('library selected');
      console.log(action.payload);
      return { ...state, library: action.payload };
    case RESET_RESOURCE:
      console.log('reset');
      console.log(INITIAL_STATE);
      return INITIAL_STATE;

    default:
      return state;
  }
};
