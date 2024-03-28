export class AbstractAction {
  #type; // propriedade privada
  
  constructor(type) {
    this.#type = type;
  }

  renderSmall() {
    throw new Error('Not implemented');
  }

  renderLarge() {
    throw new Error('Not implemented');
  }

  get type() {
    return this.#type;
  }


}