import { Picker } from '@/Picker';
import { PickerInterface } from '@/interface/PickerInterface';

export class ColorPicker extends Picker {

  constructor(picker: PickerInterface, name: string) {
    super(picker);
  }

  public pickerPosition(x: number, y: number) {
    super.pickerPosition(x, y);
  }

  public setBackgroundColor(rgb: string) {
    this.gradientBox.style.background =
        'linear-gradient(to bottom,transparent, black),' +
        `linear-gradient(to right , white, rgb(${rgb}))`;
  }

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
