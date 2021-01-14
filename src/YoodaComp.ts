import { html, LitElement, property } from 'lit-element';
import { styles } from './styles';

export class YoodaComp extends LitElement {
  static styles = [styles];

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2 class="bg-red-400">${this.title} Nr. ${this.counter}!</h2>
      <button class="bg-blue-400" @click=${this.__increment}>increment</button>
    `;
  }
}
