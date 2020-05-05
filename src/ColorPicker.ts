import { PickerInterface } from '@/interface/PickerInterface';

export class ColorPicker {
  private gradientBox: HTMLElement = document.createElement('div');
  private picker: HTMLElement = document.createElement('div');
  private pickerPos: {x: number, y: number} = {x: 0, y: 0};
  private pickerRadius: number = 0;

  constructor(picker: PickerInterface) {
    this.gradientBox.appendChild(this.picker);
    this.setId(picker);
    this.setClass(picker);
    this.addClickEvent();
  }

  /**
   * Initialisation. Add created dom elements to some element.
   * @param name ID name of the parent "wrapper" element. Picker will be added inside this element
   */
  set joinTo(name: string) {
    const element = document.getElementById(name);
    if (element === null) {
      return;
    }
    element.appendChild(this.gradientBox);
    this.pickerRadius = this.picker.offsetWidth / 2;
  }

  /**
   * Add id to the created DOM elements. Here is Rect and picker for it.
   * @param picker get ID values from this object.
   */
  private setId(picker: PickerInterface) {
    this.gradientBox.setAttribute('id', picker.boxId);
    this.picker.setAttribute('id', picker.pikerId);
  }
  /**
   * Add class names to the created picker and it's box.
   * @param picker get Class names from this object.
   */
  private setClass(picker: PickerInterface) {
    this.gradientBox.setAttribute('class', picker.boxClass);
    this.picker.setAttribute('class', picker.pickerClass);
  }

  /**
   * set color picker to the starting position inside the parent rect.
   * @param position x and y axis.
   * @return x and y available values.
   */
  set pickerPosition(position: {x: number, y: number}) {
    this.pickerPos = this.boxCoords(position.x, position.y, this.gradientBox.getBoundingClientRect());
    this.setPickerOffset(this.pickerPos);
  }
  get pickerPosition() {
    return this.pickerPos;
  }

  /**
   * Set picker coordinates inside the gradient box/
   * @param x axis
   * @param y axis
   * @param rect parent element
   * @return object of x y values
   */
  private boxCoords(x: number, y: number, rect: ClientRect) {
      /* get max mouse position (based on min) */
      const width = rect.width;
      const height = rect.height;

      /* out of box range */
      if (x < 0) { x = 0; }
      if (y < 0) { y = 0; }
      if (x > width) { x = width; }
      if (y > height) { y = height; }

      return {x, y};
  }

  /**
   * Set visual offsets for the picker
   * @param coords coordinates of the x y axis
   */
  private setPickerOffset(coords: {x: number, y: number}) {
      this.picker.style.left = (coords.x - this.pickerRadius) + 'px';
      this.picker.style.top = (coords.y - this.pickerRadius) + 'px';
  }

  private addClickEvent() {
    this.gradientBox.onmousedown = (e) => {
      this.pickerPosition = {
        x: e.clientX - this.gradientBox.getBoundingClientRect().left,
        y: e.clientY - this.gradientBox.getBoundingClientRect().top,
      };
      document.onmousemove = (e) => {
        this.pickerPosition = {
          x: e.clientX - this.gradientBox.getBoundingClientRect().left,
          y: e.clientY - this.gradientBox.getBoundingClientRect().top,
        };
        console.log(this.pickerPosition.x, this.pickerPosition.y);
      };
      document.onmouseup = () => {
        document.onmouseup = null;
        document.onmousemove = null;
      };
    };
  }
}
