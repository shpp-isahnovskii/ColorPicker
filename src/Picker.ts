import { PickerInterface } from '@/interface/PickerInterface';

export class Picker {
  protected gradientBox: HTMLElement;
  private picker: HTMLElement = document.createElement('div');
  protected pickerPos: {x: number, y: number} = {x: 0, y: 0};
  private pickerRadius: number = 0;

  constructor(picker: PickerInterface) {
    this.gradientBox = document.createElement('div');
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
   * set picker to the starting position inside the parent rect.
   * @param x axis
   * @param y axis
   */
  public pickerPosition(x: number, y: number) {
    this.pickerPos = this.boxCoords(x, y, this.gradientBox.getBoundingClientRect());
    this.setPickerOffset(this.pickerPos);
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

  public addClickEvent() {
    this.gradientBox.onmousedown = (e: MouseEvent) => {
      this.pickerPosition(
        e.clientX - this.gradientBox.getBoundingClientRect().left,
        e.clientY - this.gradientBox.getBoundingClientRect().top,
      );
      document.onmousemove = (e: MouseEvent) => {
        this.pickerPosition(
          e.clientX - this.gradientBox.getBoundingClientRect().left,
          e.clientY - this.gradientBox.getBoundingClientRect().top,
        );
      };
      document.onmouseup = () => {
        document.onmouseup = null;
        document.onmousemove = null;
      };
    };
  }
}
