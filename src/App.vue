<template lang="pug">
  #app
    .picker-wrapper(id="wrapper")
      //.hue-picker(id="hue-box")
      //  .picker-arrow-circle(id="hue-picker") //@mousedown="pickHue")
      //#test2
    #test

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PickerInterface } from '@/interface/PickerInterface';
import { ColorPicker } from '@/ColorPicker';

@Component
export default class App extends Vue {
    pickerParams: PickerInterface = {
      boxId: 'gradient-box',
      boxClass: 'picker_box',
      pikerId: 'sv-picker',
      pickerClass: 'picker_arrow'
    };
    hsvPicker = new ColorPicker(this.pickerParams);

    mounted(): void {
      this.hsvPicker.joinTo = 'wrapper';
      this.hsvPicker.pickerPosition(500, 0);
      this.hsvPicker.joinColor = 'test';
    }
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
