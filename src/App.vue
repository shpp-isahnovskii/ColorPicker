<template lang="pug">
  #app
    .picker-wrapper(id="wrapper")
      .hue-picker(id="hue-box")
        .picker-arrow-circle(id="hue-picker") //@mousedown="pickHue")
      #test2

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ColorPicker } from "@/ColorPicker";
import { PickerInterface } from "@/interface/PickerInterface";

@Component
export default class App extends Vue {
    pickerParams: PickerInterface = {
      boxId: 'gradient-box',
      boxClass: 'picker_box',
      pikerId: 'sv-picker',
      pickerClass: 'picker_arrow'
    };
    hsvPicker = new ColorPicker(this.pickerParams);

  //   pickerRadius: number = 0;
  //   HSV_H: number = 0;
  //   colorTest: any;
  //   gradientBox: HTMLElement | any;
  //
  //   huePicker: any;
  //   HUEBox: ClientRect = {
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   height: 0,
  //   width: 0,
  // };

    mounted(): void {
        // this.picker = document.getElementById("sv-picker");  //circle
        // this.pickerRadius = this.picker.getBoundingClientRect().width / 2; //circle radius
        // this.gradientBox = this.picker.parentElement.getBoundingClientRect(); // gradientBox
        // this.colorTest = document.getElementById("test");

        //this.HUEBox = document.getElementById("hue-box");

      this.hsvPicker.joinTo = 'wrapper';
      this.hsvPicker.setPickerPosition = {x: 500, y: 0};
    }

    /**
     * Function get x y coords and set color-picker in equal position inside the box element
     * @param e mouse event. Using coordinates: x y
     */
    // pickColor(e: MouseEvent) {
    //     e.preventDefault();
    //
    //     let mouseCoords = this.boxCoords(e, this.gradientBox); //get mouse coords
    //     this.setPickerOffset(mouseCoords); //set picker position (change css style)
    //     const width = this.gradientBox.width;
    //     const height = this.gradientBox.height;
    //     let S = mouseCoords.x / width * 100;
    //     let V = (height - mouseCoords.y) / height * 100;
    //
    //     let RGB = this.HSVtoRGB(S, V, this.HSV_H);
    //
    //     this.colorTest.style.backgroundColor = `rgb(${RGB.toString()})`;
    //
    //
    //     document.onmousemove = (e) => { //mouse moving
    //         mouseCoords = this.boxCoords(e, this.gradientBox);
    //         this.setPickerOffset(mouseCoords);
    //
    //         S = mouseCoords.x / width * 100;
    //         V = (height - mouseCoords.y) / height * 100;
    //
    //         RGB = this.HSVtoRGB(S, V, this.HSV_H);
    //         this.colorTest.style.backgroundColor = `rgb(${RGB.toString()})`;
    //     };
    //
    //     document.onmouseup = () => {
    //         document.onmouseup = null;
    //         document.onmousemove = null;
    //     };
    // }
    //
    // /**
    //  * Function calc max/min positions for the mouse inside the div box
    //  * @param e mouse event. Using coordinates: x y
    //  * @return object that have x and y keys - coordinates for the color-picker
    //  */
    // private boxCoords(e: MouseEvent, parentEl: ClientRect) {
    //
    //     /* get min mouse x y positions (inside the box) */
    //     let x = e.clientX - parentEl.left;
    //     let y = e.clientY - parentEl.top;
    //
    //     /* get max mouse position (based on min) */
    //     let width = parentEl.width;
    //     let height = parentEl.height;
    //
    //     /* out of box range */
    //     if(x < 0) { x = 0 }
    //     if(y < 0) { y = 0 }
    //     if(x > width) { x = width - 1 }
    //     if(y > height) { y = height - 1 }
    //
    //     return {x: x, y: y };
    // }
    //
    // /**
    //  * Mutable function set style offset for the element (picker-circle)
    //  * @param coords: {x y} of the mouse position
    //  * @return this.circle.style.left/top - apply new top/left offsets
    //  */
    // private setPickerOffset(coords: {x: number, y: number}) {
    //     this.picker.style.left = (coords.x - this.pickerRadius) + 'px';
    //     this.picker.style.top = (coords.y - this.pickerRadius) + 'px';
    // }
    //
    // /**
    //  * Function get SVH value and represents in to RGB
    //  * @param S - Saturate
    //  * @param V - Value (Brightness)
    //  * @param H - Hue
    //  * @return RGB value, formatting: [0,0,0]
    //  */
    // private HSVtoRGB(S: number , V: number, H: number) {
    //
    //     const Hi = Math.floor(H / 60) % 6;
    //     const Vmin = (100 - S) * V / 100;
    //     const a = (V - Vmin) * (H % 60) / 60;
    //     const Vinc = Vmin + a;
    //     const Vdec = V - a;
    //
    //     let RGB;
    //     switch (Hi) {
    //       case 0: RGB = [V, Vinc, Vmin];
    //         break;
    //       case 1: RGB = [Vdec, V, Vmin];
    //         break;
    //       case 2: RGB = [Vmin, V, Vinc];
    //         break;
    //       case 3: RGB = [Vmin, Vdec, V];
    //         break;
    //       case 4: RGB = [Vinc, Vmin, V];
    //         break;
    //       case 5: RGB = [V, Vmin, Vdec];
    //         break;
    //       default: RGB = [0, 0, 0];
    //     }
    //
    //     return RGB.map( (e: number) => {
    //       return Math.floor(e * 255 / 100);
    //     });
    // }
    // pickHue(e: MouseEvent) {
    //   e.preventDefault();
    //
    //   let mouseCoords = this.boxCoords(e, this.gradientBox); //get mouse coords
    //   this.setPickerOffset(mouseCoords); //set picker position (change css style)
    //   const width = this.gradientBox.width;
    //   const height = this.gradientBox.height;
    //   let S = mouseCoords.x / width * 100;
    //   let V = (height - mouseCoords.y) / height * 100;
    //
    //   let RGB = this.HSVtoRGB(S, V, this.HSV_H);
    //
    //   this.colorTest.style.backgroundColor = `rgb(${RGB.toString()})`;
    //
    //
    //   document.onmousemove = (e) => { //mouse moving
    //     mouseCoords = this.boxCoords(e, this.gradientBox);
    //     this.setPickerOffset(mouseCoords);
    //
    //     S = mouseCoords.x / width * 100;
    //     V = (height - mouseCoords.y) / height * 100;
    //
    //     RGB = this.HSVtoRGB(S, V, this.HSV_H);
    //     this.colorTest.style.backgroundColor = `rgb(${RGB.toString()})`;
    //   };
    //
    //   document.onmouseup = () => {
    //     document.onmouseup = null;
    //     document.onmousemove = null;
    //   };
    // }
}
</script>

<style lang="scss">
#app {
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.picker_box {
  display: inline-block;
  position: relative;
  width: 500px;
  height: 256px;

  background:
      linear-gradient(to bottom,transparent, black),
      linear-gradient(to right , white, red);
}

.picker_arrow {
  top:  0;
  left: 0;
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid white;
  border-radius: 50%;
  margin: 0;
  z-index: 10;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 1px 1px 3px 1px rgba(0, 0, 0, 0.15);
}
#test {
  display: inline-block;
  margin-left: 20px;
  width: 60px;
  height: 256px;
  background-color: red;
}
.hue-picker {
  width: 200px;
  height: 14px;
  margin-top: 10px;
  position: relative;
  background: linear-gradient(to right, #ff0000, #ff00ff, #0000ff, #00ffff, #00ff00, #ffff00, #ff0000);
  border-radius: 8px;
}
</style>
