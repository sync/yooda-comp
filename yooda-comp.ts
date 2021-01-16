import { YoodaComp } from './src/YoodaComp';

window.customElements.define('yooda-comp', YoodaComp);

declare global {
  interface HTMLElementTagNameMap {
    'yooda-compo': YoodaComp;
  }
}
