import {
  FINISH_ONBOARDING,
  FINISH_INTRO
} from '../actions/types';

const INITIAL_STATE = {
  onboarding: true,
  firstTimeOpen: true
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case FINISH_ONBOARDING:
      return { ...state, onboarding: action.payload };
    case FINISH_INTRO:
      return { ...state, firstTimeOpen: action.payload };
    default:
      return state;
  }
};
