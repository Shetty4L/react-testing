import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('existence of HTML elements', () => {
  it('has a textarea', () => {
    expect(wrapped.find('textarea')).toHaveLength(1);
  });

  it('has a submit button', () => {
    expect(wrapped.find('button').first().render().text().toLowerCase()).toContain('submit');
  });

  it('has a fetch comments button', () => {
    expect(wrapped.find('button').last().render().text().toLowerCase()).toContain('fetch');
  });
});

describe('text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', { target: { value: 'test-input-string' }});
    wrapped.update();
  });

  it('has a text area that allows users to type in it', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('test-input-string');
  });

  it('clears text area after form is submitted', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('test-input-string');

    wrapped.find('button#submit').simulate('click');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });

});
