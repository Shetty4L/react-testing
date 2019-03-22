import { SAVE_COMMENT } from 'actions/types';
import { saveComment } from 'actions';

describe('actions', () => {
  const action = saveComment('new comment');

  it('has the corrent type', () => {
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the corrent payload', () => {
    expect(action.payload).toEqual('new comment');  
  });
});
