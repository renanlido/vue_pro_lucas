import { AbstractAction } from "./AbstractAction";

export class BubbleText extends AbstractAction{
 #text; // propriedade privada
  
  constructor(type, text) {
    super(type)

    this.#text = text;
  }

  renderSmall() {
    return `<div class="bubble-text_small">${this.#text}</div>`;
  }

  renderLarge() {
    return `
    <div class="bubble-text_large">
      ${this.#text}
      <input/>
    </div>`;
  }

  get text() {
    return this.#text;
  }
}