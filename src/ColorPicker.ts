import { Picker } from '@/Picker';
import { PickerInterface } from '@/interface/PickerInterface';

export class ColorPicker extends Picker {
  private showedElem: HTMLElement | null;

  constructor(picker: PickerInterface) {
    super(picker);
    this.showedElem = null;
  }

  /**
   * This element will be chosen to change it's color in future
   * @param elemId id of the chosen element
   */
  set joinColorTo(elemId: string) {
    let elem = document.getElementById(elemId);
    if(elem === null) {
      return;
    }
    this.showedElem = elem;
    this.setColorToElement(elem);
  }

  /**
   * Parent function. If mouse some event was happen - set new color to some element if able.
   * @param x axis - used inside the parent element to get x position
   * @param y axis - used inside the parent element to get y position
   */
  public pickerPosition(x: number, y: number) {
    super.pickerPosition(x, y);
    if(this.showedElem !== null) {
      this.setColorToElement(this.showedElem);
    }
  }

  /**
   * Set background color to some element
   * @param element HTMLElement what will be changed
   */
  private setColorToElement(element: HTMLElement) {
    const gradientBox = this.gradientBox.getBoundingClientRect();
    const s = this.pickerPos.x / gradientBox.width * 100;
    const v = (gradientBox.height - this.pickerPos.y) / gradientBox.height * 100;

    element.style.backgroundColor = `rgb(${this.hsvToRgb(s, v,0)})`;
  }

  /**
   * Set background color to the gradientBox element.
   * @param rgb value to set in format string: 0,0,0
   */
  private gradientBackground(rgb: string): void {
    this.gradientBox.style.background =
        'linear-gradient(to bottom,transparent, black),' +
        `linear-gradient(to right , white, rgb(${rgb}))`;
  }

  /**
   * Function get HSV value and represents in to RGB
   * @param S - Saturate
   * @param V - Value (Brightness)
   * @param H - Hue
   * @return RGB value, formatting: [0,0,0]
   */
  private hsvToRgb(S: number , V: number, H: number) {

      const Hi = Math.floor(H / 60) % 6;
      const Vmin = (100 - S) * V / 100;
      const a = (V - Vmin) * (H % 60) / 60;
      const Vinc = Vmin + a;
      const Vdec = V - a;

      let RGB;
      switch (Hi) {
        case 0: RGB = [V, Vinc, Vmin];
          break;
        case 1: RGB = [Vdec, V, Vmin];
          break;
        case 2: RGB = [Vmin, V, Vinc];
          break;
        case 3: RGB = [Vmin, Vdec, V];
          break;
        case 4: RGB = [Vinc, Vmin, V];
          break;
        case 5: RGB = [V, Vmin, Vdec];
          break;
        default: RGB = [0, 0, 0];
      }
      return RGB.map( (e: number) => {
        return Math.floor(e * 255 / 100);
      }).toString();
  }
}
