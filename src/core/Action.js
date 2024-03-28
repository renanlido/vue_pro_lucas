import { BubbleImage } from "./BubbleImage";
import { BubbleText } from "./BubbleText";

export class ActionFactory {
  create(type, content) {
    switch (type) {
      case 'text':
        return new BubbleText(type, content);
      case 'image':
        return new BubbleImage(type, content);
      default:
        throw new Error('Type not found');
    }
  }

}