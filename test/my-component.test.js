/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';
import '../src/my-component';

describe('True Checking', () => {
  it('gets form data', async () => {
    const el = await fixture('<my-component></my-component>');
    expect(el.showFormData()).to.eql({ greeting: 'Hello' });
  });
});
