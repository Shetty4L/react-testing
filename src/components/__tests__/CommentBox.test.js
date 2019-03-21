import React from 'react';
import { shallow, mount } from 'enzyme';
import CommentBox from '../CommentBox';

describe('existence of HTML elements', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<CommentBox />);
  });

  it('has a textarea', () => {
    expect(wrapped.find('textarea')).toHaveLength(1);
  });

  it('has a submit button', () => {
    expect(wrapped.find('button')).toHaveLength(1);
  });
});

describe('text area', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(<CommentBox />);
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('has a text area that allows users to type in it', () => {
    wrapped.find('textarea').simulate('change', { target: { value: 'test-input-string' }});
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('test-input-string');
  });

  it('clears text area after form is submitted', () => {
    wrapped.setState({ comment: 'test-input-string' });
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('test-input-string');

    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });

});
