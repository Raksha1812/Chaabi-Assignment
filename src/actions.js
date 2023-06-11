// Action Types
export const INPUT_KEY = 'INPUT_KEY';
export const RESET_KEYS = 'RESET_KEYS';

// Action Creators
export const inputKey = (key) => ({
  type: INPUT_KEY,
  payload: key,
});

export const resetKeys = () => ({
  type: RESET_KEYS,
});
