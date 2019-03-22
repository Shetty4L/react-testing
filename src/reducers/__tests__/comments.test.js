import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

let INITIAL_STATE;

beforeEach(() => {
  INITIAL_STATE = [];
});

describe('action types', () => {
  it('handles actions of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'new comment'
    };

    const newState = commentsReducer(INITIAL_STATE, action);

    expect(newState).toHaveLength(INITIAL_STATE.length + 1);
    expect(newState).toEqual(['new comment']);
  });

  it('handles undefined action types', () => {
    const action = {
      type: 'UNKNOWN',
      payload: 'undefined action'
    };

    const newState = commentsReducer(INITIAL_STATE, action);

    expect(newState).toEqual(INITIAL_STATE)
  });
});
