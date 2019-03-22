import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList'
import Root from 'Root'

describe('comment list', () => {
  const initialState = {
    comments: ['comment 1', 'comment 2', 'comment 3']
  };

  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });

  it('has an li component for each comment', () => {
    expect(wrapped.find('li')).toHaveLength(initialState.comments.length);
  });

  it('shows text for each comment', () => {
    expect(wrapped.render().text()).toContain('comment 1');
    expect(wrapped.render().text()).toContain('comment 2');
    expect(wrapped.render().text()).toContain('comment 3');
  })
});
