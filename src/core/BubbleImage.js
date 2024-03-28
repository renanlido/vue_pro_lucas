import { AbstractAction } from "./AbstractAction";

export class BubbleImage extends AbstractAction{
 #src; // propriedade privada
  
  constructor(type, src) {
    super(type)

    this.#src = src;
  }

  renderSmall() {
    return `
    <div class="bubble-image_small">
      <img src="${this.#src}" alt="Imagem" />
    </div>`;
  }

  renderLarge() {
    return `
    <div class="bubble-image_large">
      <img src="${this.#src}" alt="Imagem" />
    </div>`;
  }

  get src() {
    return this.#src;
  }
}