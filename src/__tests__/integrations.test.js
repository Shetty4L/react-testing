import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import fetch from 'jest-fetch-mock';
global.fetch = fetch; //eslint-disable-line

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  fetch.resetMocks();

});

afterEach(() => {
  wrapped.unmount();
});

it('can fetch a list of comments and display them', async (done) => {
  fetch.mockResponseOnce(JSON.stringify([{ name: 'comment 1'}, { name: 'comment 2'}]));

  wrapped.find('button#fetch').simulate('click');

  setTimeout(() => {
    wrapped.update();
    expect(wrapped.find('li')).toHaveLength(2);
    done();
  }, 100);
});
