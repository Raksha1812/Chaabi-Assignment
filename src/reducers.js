import { INPUT_KEY, RESET_KEYS } from './actions';

const initialState = {
  inputValue: '',
  currentKey: '',
  correctKeys: 0,
  totalKeys: 0,
  accuracy: 100,
  timer: 300, // 5 minutes in seconds
};

const typingReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_KEY:
      const typedKey = action.payload;
      const { currentKey, correctKeys, totalKeys } = state;
      const newCorrectKeys = typedKey === currentKey ? correctKeys + 1 : correctKeys;
      return {
        ...state,
        inputValue: typedKey,
        correctKeys: newCorrectKeys,
        totalKeys: totalKeys + 1,
      };
    case RESET_KEYS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default typingReducer;
