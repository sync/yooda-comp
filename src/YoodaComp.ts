import { html, LitElement, property } from 'lit-element';
import { asStatic, asTag } from 'static-params';
import styles from './styles';

const shtml = asTag(html);

export class YoodaComp extends LitElement {
  static styles = [styles];

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  @property({ type: Boolean }) checked = false;

  @property({ type: String }) as = 'div';

  __increment() {
    this.counter += 1;
  }

  __toggleCheck(e: any) {
    const checked = Boolean(e.target.value);
    this.checked = checked;
  }

  render() {
    const tag = asStatic(this.as);

    return shtml`
    <${tag}>
      <h1 class="bg-red-400">${this.title} Nr. ${this.counter}!</h1>
      <button class="bg-blue-400" @click=${this.__increment}>increment</button>
      <div>
        <input
          type="checkbox"
          id="horns"
          name="horns"
          .checked=${this.checked}
          @click=${this.__toggleCheck}
        />
        <label for="horns">Horns</label>
      </div>
    </${tag}>
    `;
  }
}
