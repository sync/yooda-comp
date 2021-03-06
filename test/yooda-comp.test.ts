import { html, fixture, expect } from '@open-wc/testing';

import type { YoodaComp } from '../src/YoodaComp';
import '../src/YoodaComp';

describe('YoodaComp', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<YoodaComp>(html`<yooda-comp></yooda-comp>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<YoodaComp>(html`<yooda-comp></yooda-comp>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can check the box', async () => {
    const el = await fixture<YoodaComp>(html`<yooda-comp></yooda-comp>`);
    el.shadowRoot!.querySelector('input')!.click();

    expect(el.checked).to.equal(true);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<YoodaComp>(
      html`<yooda-comp title="attribute title"></yooda-comp>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<YoodaComp>(html`<yooda-comp></yooda-comp>`);

    expect(el).shadowDom.to.be.accessible();
  });
});
