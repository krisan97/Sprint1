import { combineReducers } from 'redux';
import OnBoardingReducer from './OnBoardingReducer';
import LibraryReducer from './Resources/LibraryReducer';
import SelectionReducer from './Resources/SelectionReducer';

export default combineReducers({
  intro: OnBoardingReducer,
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
